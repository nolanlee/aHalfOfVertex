define(['lib/mustache', 'templete/newsTemplete'], function(Mustache, NewsTemplete) {
    var LOAD_OFFSET = 140,
        PAGE_LENGTH = 15,
        PAGINATION_RANGE = 5,
        NEWS_PARTS = 3,
        NEWS_URL = '../json/home.json';

    var loadIndex = 1,
        currentPageNum = 1,
        PaginationElements = {},
        $doc = $(document),
        $win = $(window),
        $content = $('#content'),
        $newsList = $('#news-list'),
        $loadingImg = $('#loading-img');

    var displayLoadingImg = function() {
        $loadingImg.css('display', 'block');
    };

    var disappearedLoadingImg = function() {
        $loadingImg.css('display', 'none');
    };

    var renderPagination = function(pageNum, pageTotal) {
        var pResult,
            pFloatBegin,
            frontPageTotal = Math.ceil(pageTotal / NEWS_PARTS),
            pRange = frontPageTotal < (PAGINATION_RANGE + 2) ? (frontPageTotal - 2) : PAGINATION_RANGE,
            preBreak = '<li><span id="pre-break">......<span></li>',
            nextBreak = '<li><span id="next-break">......<span></li>',
            ptPart1 = '<li><a class="page-num',
            ptPart2 = '" href="javascript:">'
            ptPart3 = '</a></li>'
            ptSelected = ' page-num-selected',
            ptHeader = '<div id="pagination-wrap"><ul id="pagination"><li><a id="previous" class="pagination-button button-enabled" href="javascript:">FRONT</a></li><li><a class="page-num" href="javascript:">1</a></li>',
            ptFooter = '<li><a class="page-num" href="javascript:">' + frontPageTotal + '</a></li><li><a id="next" class="pagination-button button-enabled" href="javascript:">NEXT</a></li><li><input id="page-num" type="text"/></li><li><a id="go" class="pagination-button button-enabled" href="javascript:">GO</a></li></ul></div>';

        var floatBeginFactory = function(floatBegain) {
            if ((pageNum - 2) > 1 && (pageNum + 2) < frontPageTotal) {
                floatBegain = pageNum - 2;
            } else if ((pageNum - 2) <= 1 && (pageNum + 2) < frontPageTotal) {
                floatBegain = 2;
            } else {
                floatBegain = frontPageTotal - PAGINATION_RANGE;
            }
            return floatBegain;
        };

        var switchBreak = function(pageNum, frontPageTotal) {
            var rangeRadius = Math.ceil((PAGINATION_RANGE + 1) / 2);

            if (pageNum > rangeRadius + 1) {
                ptHeader = ptHeader + preBreak;
            }

            if (pageNum < frontPageTotal - PAGINATION_RANGE + rangeRadius - 1) {
                ptFooter = nextBreak + ptFooter;
            }
        };


        pFloatBegin = floatBeginFactory(pFloatBegin);
        switchBreak(pageNum, frontPageTotal);

        pResult = ptHeader;

        for (var i = 0; i < pRange; i++) {
            if(pFloatBegin + i == currentPageNum) {
               pResult += ptPart1 + ptSelected + ptPart2 + (pFloatBegin + i) + ptPart3;
            } else {
                pResult += ptPart1 + ptPart2 + (pFloatBegin + i) + ptPart3;
            }
        }

        pResult += ptFooter;
        return pResult;
    };

    var doPagination = function() {
        PaginationElements.$pagination.remove();
        PaginationElements = {};
        $newsList.empty();
        initPage();
    };

    var initPagination = function() {
        var initPaginationElements = function() {
            PaginationElements.$pagination = $('#pagination-wrap'),
            PaginationElements.$previous = $('#previous'),
            PaginationElements.$next = $('#next'),
            PaginationElements.$go = $('#go'),
            PaginationElements.$pageNumInput = $('#page-num');
            PaginationElements.$pageNums = $('.page-num');
        };

        var initPaginationStyle = function() {

        };

        var initPaginationAction = function() {
            PaginationElements.$pageNums.on('click', function() {
                currentPageNum = parseInt($(this).html());
                doPagination();
            });

            PaginationElements.$previous.on('click', function() {
                if (currentPageNum > 1) {
                    currentPageNum--;
                    doPagination();
                }
            });

            PaginationElements.$next.on('click', function() {
                if (currentPageNum < 1) {
                    currentPageNum++;
                    doPagination();
                }
            });

            PaginationElements.$go.on('click', function() {
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

    var renderNews = function(data) {
        if ($('.news-wrap').length >= data.pageLength * NEWS_PARTS) {
            loadIndex = 1;
            unbindScroll();
            $content.append(renderPagination(currentPageNum, data.pageTotal));
            initPagination();
        } else {
            loadIndex++;
            displayLoadingImg();

            if (typeof data != 'object') {
                data = JSON.parse(data);
            }

            if (data != null) {
                $newsList.append(Mustache.render(NewsTemplete.templete, data));
            }

            disappearedLoadingImg();
        }
    };

    var getNews = function(handler) {
        $.get(NEWS_URL, (currentPageNum * NEWS_PARTS) + loadIndex, function(data) {
            handler(data);
        });
    };

    var loadNext = function() {
        var windowHeight = $win.height() + $win.scrollTop(),
            loadHeight = $doc.height() - LOAD_OFFSET;

        if (loadHeight <= windowHeight) {
            getNews(renderNews);
        }
    };

    var bindScroll = function() {
        $doc.bind('scroll', loadNext);
    };

    var unbindScroll = function() {
        $doc.unbind('scroll', loadNext);
    };

    var initPage = function() {
        bindScroll();
        getNews(renderNews);
    };

    return {
        init: initPage
    }

});