(function (window, $) {
	var LOAD_OFFSET = 140,
		PAGE_LENGTH = 15;
		NEWS_URL = "../json/home.json";
		
	var loadIndex = 1,
		$content = $("#content"),
		$loadingImg = $("#loadingImg"),
		$pagination = $("#pagination");

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

	var renderLoadingImg = function () {
		$loadingImg.css("display", "block");
	};

	/*
	 *unfinished
	 */
	var renderPagination = function (pageNum, pageTotal) {
		var pResult,
			pPlaceholder = '...'
			pRange = 5,
			ptPart1='<li><a class="page-num" href="javascript:">',
			ptPart2 = '</a></li>',
			ptHeader = '<ul id="pagination"><li><a id="previous" class="pagination-button" href="javascript:">' +
				'FRONT</a></li><li><a class="page-num" href="javascript:">1</a></li>',
			ptFooter = '<li><a class="page-num" href="javascript:">' + pageTotal + '</a></li>' +
				'<li><a id="next" class="pagination-button" href="javascript:">NEXT</a></li>' +
				'<li><input id="pageNum" type="text"/></li>' +
				'<li><a id="go" class="pagination-button" href="javascript:">GO</a></li>';
			
			pResult = ptPart1 + 1 + ptPart2;
			
			for(var i = 0; i< pRange; i++) {
				
			}
			
			pResult += ptPart1 + pageTotal + ptPart2;
		return pResult;
	};

	var bindScroll = function () {
		$(document).bind("scroll", loadNext);
	};

	var unbindScroll = function () {
		$(document).unbind("scroll", loadNext);
	}
	
	/*
	 *unfinished
	 */
	var renderNews = function () {
		if ($(".news-wrap").length >= PAGE_LENGTH) {
			loadIndex = 1;
			$.get();
		} else {
			loadIndex++;
			renderLoadingImg();
			$.get(NEWS_URL, loadIndex, function (data) {
				var result = "";
				
				if (typeof data != "object") {
					data = JSON.parse(data);
				} 
				
				if(data !=null) {
					$.each(data.news, function (index, news) {
						result += sewNews(news.date, news.collect, news.like, news.topic, news.content);
					});
	
					$content.append(result);
					bindScroll();
				}

				$loadingImg.css("display", "none");
			});
		}
	};

	var loadNext = function () {
		var windowHeight = $(window).height() + $(window).scrollTop(),
			loadHeight = $(document).height() - LOAD_OFFSET;

		if (loadHeight <= windowHeight) {
			unbindScroll();
			renderNews();
		}
	};

	var init = function () {
		bindScroll();
	};

	init();

})(window, $);