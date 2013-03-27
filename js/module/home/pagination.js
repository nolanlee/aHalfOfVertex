define(['lib/mustache', 'templete/newsTemplete'], function (Mustache, NewsTemplete) {
    var LOAD_OFFSET = 140,
        PAGE_LENGTH = 15,
        PAGINATION_RANGE = 5,
        NEWS_PARTS = 3,
        NEWS_URL = '../json/home.json';

    var loadIndex = 1,
        currentPageNum = 1,
        frontPageTotal = 1,
        PaginationElements = {},
        $doc = $(document),
        $win = $(window),
        $content = $('#content'),
        $newsList,
        $loadingImg,
        $paginationWrap;

    var displayLoadingImg = function () {
        $loadingImg.css('display', 'block');
    };

    var disappearedLoadingImg = function () {
        $loadingImg.css('display', 'none');
    };

    var paginationFactory = function (pageNum, pageTotal) {
        var floatListBegin,
            Pagination = {
                pageNumList: []
            };
            
        frontPageTotal = Math.ceil(pageTotal / NEWS_PARTS);

        var floatBeginFactory = function () {
            if ((pageNum - 2) > 1 && (pageNum + 2) < frontPageTotal) {
                floatBegin = pageNum - 2;
            } else if ((pageNum - 2) <= 1 && (pageNum + 2) < frontPageTotal) {
                floatBegin = 2;
            } else {
                floatBegin = frontPageTotal - PAGINATION_RANGE;
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
            Pagination.pageNumList[PAGINATION_RANGE + 1] = {
                pageNum: frontPageTotal,
                pageSelected: true
            };
        } else {
            Pagination.nextEnabled = true;
            Pagination.pageNumList[PAGINATION_RANGE + 1] = {
                pageNum: frontPageTotal
            };
        }

        if(floatListBegin > 2) {
             Pagination.pageNumList[0].pageBreak = true;
        }

        for (var i = 0; i <PAGINATION_RANGE; i++) {
            var _pageNum = i + floatListBegin;

            Pagination.pageNumList[i + 1] = {pageNum: _pageNum};

            if(i + floatListBegin === pageNum) {
                Pagination.pageNumList[i + 1].pageSelected = true;
            }

            if(i + 1 >= PAGINATION_RANGE && _pageNum < frontPageTotal - 1) {
                Pagination.pageNumList[i + 1].pageBreak = true;
            }
        }

        return Pagination;
    };

    var doPagination = function () {
        PaginationElements = {};
        $newsList.empty();
        $paginationWrap.empty();
        readyRender();
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
                    currentPageNum = parseInt(_pageNum);
                    doPagination();
                } else {
                    alert('请输入合法的页码:)');
                }
            });

        };

        initPaginationElements();
        initPaginationAction();
    };

    var renderNews = function (data) {
        if ($('.news-wrap')
            .length >= data.pageLength * NEWS_PARTS) {
            loadIndex = 1;
            unbindScroll();
            $paginationWrap.html(Mustache.render(NewsTemplete.paginationTemplate, paginationFactory(currentPageNum, data.pageTotal)));
            initPagination();
        } else {
            loadIndex++;
            displayLoadingImg();

            if (typeof data != 'object') {
                data = JSON.parse(data);
            }

            if (data != null) {
                $newsList.append(Mustache.render(NewsTemplete.newsTemplete, data));
            }

            disappearedLoadingImg();
        }
    };

    var getNews = function (handler) {
        $.get(NEWS_URL, (currentPageNum * NEWS_PARTS) + loadIndex, function (
        data) {
            handler(data);
        });
    };

    var loadNext = function () {
        var windowHeight = $win.height() + $win.scrollTop(),
            loadHeight = $doc.height() - LOAD_OFFSET;

        if (loadHeight <= windowHeight) {
            getNews(renderNews);
        }
    };

    var bindScroll = function () {
        $win.bind('scroll', loadNext);
    };

    var unbindScroll = function () {
        $win.unbind('scroll', loadNext);
    };

    var readyRender = function(){
        bindScroll();
        getNews(renderNews);
    };

    var initPage = function (newsList, loadingImg, paginationWrap) {
        loadIndex = 1;
        currentPageNum = 1;
        $newsList = newsList;
        $loadingImg = loadingImg;
        $paginationWrap = paginationWrap;
        readyRender();
    };

    return {
        init: initPage
    }

});