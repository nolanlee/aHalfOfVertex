define(['lib/mustache', 'template/paginationTemplate'], function (Mustache, PaginationTemplate) {
    var LOAD_OFFSET = 140,
        PAGE_LENGTH = 15,
        PAGINATION_RANGE = 5,
        DATA_PARTS = 3;

    var loadIndex = 1,
        currentPageNum = 1,
        frontPageTotal = 1,
        PaginationElements = {},
        dataTemplate,
        dataUrl,
        loadingImg = '../images/loading.gif',
        $doc = $(document),
        $win = $(window),
        $container = $('#content'), 
        $dataContainer,
        $loadingImg,
        $paginationWrap;

    var Pagination = {};

    var displayLoadingImg = function () {
        $loadingImg.css('display', 'block');
    };

    var disappearedLoadingImg = function () {
        $loadingImg.css('display', 'none');
    };

    var paginationFactory = function (pageNum, pageTotal) {
        var floatListBegin,
            pageRange = PAGINATION_RANGE,
            Pagination = {
                pageNumList: []
            };
        
        frontPageTotal = Math.ceil(pageTotal / DATA_PARTS);

        if(frontPageTotal - 2 < PAGINATION_RANGE) {
            pageRange = frontPageTotal - 2;
        }

        var floatBeginFactory = function () {
            if ((pageNum - 2) > 1 && (pageNum + 2) < frontPageTotal) {
                floatBegin = pageNum - 2;
            } else if ((pageNum - 2) <= 1 && (pageNum + 2) < frontPageTotal) {
                floatBegin = 2;
            } else {
                floatBegin = frontPageTotal - pageRange;
            }
            return floatBegin;
        };


        floatListBegin = floatBeginFactory();

        if (pageNum === 1) {
            Pagination.preDisabled = true;
            Pagination.pageNumList[0] = {
                pageNum: 1,
                pageSelected: true
            };
        } else {
            Pagination.preEnabled = true;
            Pagination.pageNumList[0] = {
                pageNum: 1
            };
        }

        if (pageNum === frontPageTotal) {
            Pagination.nextDisabled = true;
            Pagination.pageNumList[pageRange + 1] = {
                pageNum: frontPageTotal,
                pageSelected: true
            };
        } else {
            Pagination.nextEnabled = true;
            Pagination.pageNumList[pageRange + 1] = {
                pageNum: frontPageTotal
            };
        }

        if (floatListBegin > 2) {
            Pagination.pageNumList[0].pageBreak = true;
        }

        for (var i = 0; i < pageRange; i++) {
            var _pageNum = i + floatListBegin;

            Pagination.pageNumList[i + 1] = {
                pageNum: _pageNum
            };

            if (i + floatListBegin === pageNum) {
                Pagination.pageNumList[i + 1].pageSelected = true;
            }

            if (i + 1 >= pageRange && _pageNum < frontPageTotal - 1) {
                Pagination.pageNumList[i + 1].pageBreak = true;
            }
        }

        return Pagination;
    };

    var doPagination = function () {
        PaginationElements = {};
        $dataContainer.empty();
        $paginationWrap.empty();
        $loadingImg.empty();
        renderPagination();
    };

    var initPagination = function () {
        var initPaginationElements = function () {
            PaginationElements.$previous = $('#previous'),
            PaginationElements.$next = $('#next'),
            PaginationElements.$go = $('#go'),
            PaginationElements.$pageNumInput = $('#page-num');
            PaginationElements.$pageNums = $('.page-num');
        };

        var initPaginationAction = function () {
            PaginationElements.$pageNums.on('click', function () {
                currentPageNum = parseInt($(this).html());
                doPagination();
            });

            PaginationElements.$previous.on('click', function () {
                if (currentPageNum > 1) {
                    currentPageNum--;
                    doPagination();
                }
            });

            PaginationElements.$next.on('click', function () {
                if (currentPageNum < frontPageTotal) {
                    currentPageNum++;
                    doPagination();
                }
            });

            PaginationElements.$go.on('click', function () {
                var _pageNum = PaginationElements.$pageNumInput.val();

                if (_pageNum && _pageNum.match('^[0-9]*[1-9][0-9]*$')) {
                    currentPageNum = parseInt(_pageNum) > frontPageTotal?frontPageTotal : parseInt(_pageNum);
                    doPagination();
                } else {
                    alert('请输入合法的页码:)');
                }
            });

        };

        initPaginationElements();
        initPaginationAction();
    };

    var renderData = function (data) {
        if (!data || $dataContainer.children().length >= data.pageLength * DATA_PARTS) {
            loadIndex = 1;
            unbindScroll();
            $paginationWrap.html(Mustache.render(PaginationTemplate.paginationTemplate, paginationFactory(currentPageNum, data.pageTotal)));
            initPagination();
        } else {
            loadIndex++;
            displayLoadingImg();

            if (typeof data != 'object') {
                data = JSON.parse(data);
            }

            if (data != null) {
                $dataContainer.append(Mustache.render(dataTemplate, data));
            }

            disappearedLoadingImg();
        }
    };

    var getData = function (handler) {
        $.get(dataUrl, (currentPageNum - 1) * DATA_PARTS + loadIndex, function (data) {
            handler(data);
        });
    };

    var loadNext = function () {
        var windowHeight = $win.height() + $win.scrollTop(),
            loadHeight = $doc.height() - LOAD_OFFSET;

        if (loadHeight <= windowHeight) {
            getData(renderData);
        }
    };

    var bindScroll = function () {
        $win.bind('scroll', loadNext);
    };

    var unbindScroll = function () {
        $win.unbind('scroll', loadNext);
    };

    var renderPagination = function () {
        bindScroll();
        getData(renderData);
    };

    var beforeRenderPagination = function() {
        $container.append(Mustache.render(PaginationTemplate.paginationReadyTemplate, {'loadingImg':loadingImg}));
        $loadingImg = $('#loading-img');
        $paginationWrap = $('#pagination-wrap');
    };

    Pagination.init = function (_dataContainer, _dataTemplate, _dataUrl, _container, _loadingImg) {
        loadIndex = 1;
        currentPageNum = 1;
        $dataContainer = _dataContainer;
        dataTemplate = _dataTemplate;
        dataUrl = _dataUrl;
        if(_container) {
            $container = _container;
        }
        if(_loadingImg) {
            loadingImg = _loadingImg;
        }
        beforeRenderPagination();
        renderPagination();
    };

    return Pagination;
});