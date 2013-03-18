(function(window, $) {
	var LOAD_OFFSET = 140,
		NEWS_URL = "../json/home.json",
		loadIndex = 1,
		$content = $("#content"),
		$loadingImg = $("#loadingImg");

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

	var renderLoadingImg = function() {
		$loadingImg.css("display", "block");
	};

	/*
	 *unfinished
	 */
	var renderPagenation = function(index, pageNum) {

	};


	var bindScroll = function() {
		$(document).bind("scroll", loadNext);
	};

	var unbindScroll = function() {
		$(document).unbind("scroll", loadNext);
	}

	/*
	 *unfinished
	 */
	var renderNews = function() {
		if ($(".news-wrap").length >= 15) {
			loadIndex = 1;
			$.get();
		} else {
			loadIndex++;
			renderLoadingImg();
			$.get(NEWS_URL, loadIndex, function(data) {
				var newsArr = JSON.parse(data),
					result = "";

				$.each(newsArr.news, function(index, news) {
					result += sewNews(news.date, news.collect, news.like, news.topic, news.content);
				});

				$content.append(result);

				bindScroll();
				$loadingImg.css("display", "none");
			});
		}
	};

	var loadNext = function() {
		var windowHeight = $(window).height() + $(window).scrollTop(),
			loadHeight = $(document).height() - LOAD_OFFSET;

		if (loadHeight <= windowHeight) {
			unbindScroll();
			renderNews();
		}
	};

	var init = function() {
		bindScroll();
	};

	init();

})(window, $);