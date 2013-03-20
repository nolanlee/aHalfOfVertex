(function(window, $) {
	var LOAD_OFFSET = 140,
		PAGE_LENGTH = 15;
	NEWS_URL = "../json/home.json";

	var loadIndex = 1,
		$content = $("#content"),
		$newsList = $("#news-list"),
		$loadingImg = $("#loading-img"),
		$pagination = $("#pagination"),
		$previous = $("#previous"),
		$next = $("#next"),
		$go = $("#go"),
		$pageNum = $("#page-num");

	var sewNews = function(date, collect, like, topic, content) {
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

	var displayLoadingImg = function() {
		$loadingImg.css("display", "block");
	};

	var disappearedLoadingImg = function() {
		$loadingImg.css("display", "none");
	};

	var switchBreak = function(pageNum) {

	};

	var renderPagination = function(pageTotal, partLength) {
		var pResult,
			frontPageTotal = Math.ceil(pageTotal / partLength),
			pRange = frontPageTotal < 7 ? (frontPageTotal - 2) : 5,
			ptPart1 = '<li><a class="page-num" href="javascript:">',
			ptPart2 = '</a></li>',
			ptHeader = '<div id="pagination-wrap"><ul id="pagination"><li><a id="previous" class="pagination-button button-disabled" href="javascript:">FRONT</a></li><li><a class="page-num page-num-selected" href="javascript:">1</a></li><li><span id="pre-break" class="break-hidden">......<span></li>',
			ptFooter = '<li><span id="next-break" class="break-hidden">......<span></li><li><a class="page-num" href="javascript:">' + frontPageTotal + '</a></li><li><a id="next" class="pagination-button button-enabled" href="javascript:">NEXT</a></li><li><input id="page-num" type="text"/></li><li><a id="go" class="pagination-button button-enabled" href="javascript:">GO</a></li></ul></div>';

		pResult = ptHeader;

		for (var i = 0; i < pRange; i++) {
			pResult += ptPart1 + (i + 2) + ptPart2;
		}

		pResult += ptFooter;
		return pResult;
	};

	var getNews = function(handler) {
		$.get(NEWS_URL, loadIndex, function(data) {
			handler(data);
		});
	};

	var renderNews = function(data) {
		if ($(".news-wrap").length >= PAGE_LENGTH) {
			loadIndex = 1;
			unbindScroll();
			$content.append(renderPagination(data.pageTotal, data.partLength));
		} else {
			loadIndex++;
			displayLoadingImg();

			var result = "";

			if (typeof data != "object") {
				data = JSON.parse(data);
			}

			if (data != null) {
				$.each(data.news, function(index, news) {
					result += sewNews(news.date, news.collect, news.like, news.topic, news.content);
				});

				$newsList.append(result);
				bindScroll();
			}

			disappearedLoadingImg();
		}
	};

	var loadNext = function() {
		var windowHeight = $(window).height() + $(window).scrollTop(),
			loadHeight = $(document).height() - LOAD_OFFSET;

		if (loadHeight <= windowHeight) {
			unbindScroll();
			getNews(renderNews);
		}
	};

	var bindScroll = function() {
		$(document).bind("scroll", loadNext);
	};

	var unbindScroll = function() {
		$(document).unbind("scroll", loadNext);
	};

	var init = function() {
		bindScroll();
	};

	init();

})(window, $);