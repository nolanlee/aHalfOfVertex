(function (window, $) {
	var LOAD_OFFSET = 140,
		PAGE_LENGTH = 15,
		PAGINATION_RANGE = 5,
		NEWS_URL = "../json/home.json";

	var paginationElements = {},
		$content = $("#content"),
		$newsList = $("#news-list"),
		$loadingImg = $("#loading-img"),
		loadIndex = 1,
		currentPageNum = 1;

	var sewNews = function (date, collect, like, topic, content) {
		return '<div class="news-wrap"><div class="time-comment">' +
			'<div><span class="news-date comment">' + date + '</span>' +
			'<a class="comment-icon news-date-image" href="javascript:"></a></div>' +
			'<div><span class="news-collect comment">' + collect + '</span>' +
			'<a class="comment-icon news-collect-image"  href="javascript:"></a></div>' +
			'<div><span class="news-like comment">' + like + '</span>' +
			'<a class="comment-icon news-like-image"  href="javascript:" ></a></div></div>' +
			'<div class="news"><div class="news-topic">' + topic + '</div>' +
			'<div class="news-content">' + content + '</div></div></div>';
	};

	var displayLoadingImg = function () {
		$loadingImg.css("display", "block");
	};

	var disappearedLoadingImg = function () {
		$loadingImg.css("display", "none");
	};

	var renderPagination = function (pageNum, pageTotal, partLength) {
		var pResult,
			pFloatBegin,
			frontPageTotal = Math.ceil(pageTotal / partLength),
			pRange = frontPageTotal < (PAGINATION_RANGE + 2) ? (frontPageTotal - 2) : PAGINATION_RANGE,
			preBreak = '<li><span id="pre-break">......<span></li>',
			nextBreak = '<li><span id="next-break">......<span></li>',
			ptPart1 = '<li><a class="page-num" href="javascript:">',
			ptPart2 = '</a></li>',
			ptHeader = '<div id="pagination-wrap"><ul id="pagination"><li><a id="previous" class="pagination-button button-disabled" href="javascript:">FRONT</a></li><li><a class="page-num" href="javascript:">1</a></li>',
			ptFooter = '<li><a class="page-num" href="javascript:">' + frontPageTotal + '</a></li><li><a id="next" class="pagination-button button-enabled" href="javascript:">NEXT</a></li><li><input id="page-num" type="text"/></li><li><a id="go" class="pagination-button button-enabled" href="javascript:">GO</a></li></ul></div>';

		var floatBeginFactory = function (floatBegain) {
			if ((pageNum - 2) > 1 && (pageNum + 2) < frontPageTotal) {
				floatBegain = pageNum - 2;
			} else if ((pageNum - 2) <= 1 && (pageNum + 2) < frontPageTotal) {
				floatBegain = 2;
			} else {
				floatBegain = frontPageTotal - PAGINATION_RANGE;
			}
			return floatBegain;
		};

		var switchBreak = function (pageNum, frontPageTotal) {
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
			pResult += ptPart1 + (pFloatBegin + i) + ptPart2;
		}

		pResult += ptFooter;
		return pResult;
	};

	var initPaginitionElements = function () {
		paginationElements.$pagination = $("#pagination-wrap"),
		paginationElements.$previous = $("#previous"),
		paginationElements.$next = $("#next"),
		paginationElements.$go = $("#go"),
		paginationElements.$pageNumInput = $("#page-num");
		paginationElements.$pageNums = $(".page-num");
	};

	var doPagination = function () {
		$newsList.empty();
		paginationElements.$pagination.remove();
		pagination = {};
		getNews(renderNews);
		bindScroll();
	};

	var initPaginationAction = function () {
		paginationElements.$pageNums.on("click", function () {
			currentPageNum = parseInt($(this).html());
			doPagination();
		});

		paginationElements.$previous.on("click", function () {
			if (currentPageNum > 1) {
				currentPageNum--;
				doPagination();
			}
		});

		paginationElements.$next.on("click", function () {
			if (currentPageNum < 1) {
				currentPageNum++;
				doPagination();
			}
		});

		paginationElements.$go.on("click", function(){
			var _pageNum = paginationElements.$pageNumInput.val();

			if(_pageNum && _pageNum.match("^[0-9]*[1-9][0-9]*$")) {
				currentPageNum = parseInt(_pageNum);
				doPagination();
			} else {
				alert("请输入合法的页码:)");
			}
		});

	};

	var renderNews = function (data) {
		if ($(".news-wrap").length >= PAGE_LENGTH) {
			loadIndex = 1;
			unbindScroll();
			$content.append(renderPagination(currentPageNum, data.pageTotal, data.partLength));
			initPaginitionElements();
			initPaginationAction();
		} else {
			loadIndex++;
			displayLoadingImg();

			var result = "";

			if (typeof data != "object") {
				data = JSON.parse(data);
			}

			if (data != null) {
				$.each(data.news, function (index, news) {
					result += sewNews(news.date, news.collect, news.like, news.topic, news.content);
				});

				$newsList.append(result);
				bindScroll();
			}

			disappearedLoadingImg();
		}
	};

	var getNews = function (handler) {
		$.get(NEWS_URL, loadIndex, function(data){
			handler(data);
		});
	};

	var loadNext = function () {
		var windowHeight = $(window).height() + $(window).scrollTop(),
			loadHeight = $(document).height() - LOAD_OFFSET;

		if (loadHeight <= windowHeight) {
			unbindScroll();
			getNews(renderNews);
		}
	};

	var bindScroll = function () {
		$(document).bind("scroll", loadNext);
	};

	var unbindScroll = function () {
		$(document).unbind("scroll", loadNext);
	};

	var init = function () {
		getNews(renderNews);
		bindScroll();
	};

	init();

})(window, $);