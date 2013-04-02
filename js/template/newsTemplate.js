define(function(){
	return {
		newsTemplate: '{{#news}}'+
                  '<div class="news-wrap">'+
                        '<div class="time-comment">' +
                              '<div>' +
                                    '<span class="news-date comment">{{date}}</span>' +
                                    '<a class="comment-icon news-date-image" href="javascript:"></a>' +
                              '</div>' +
                              '<div>' +
                                    '<span class="news-collect comment">{{collect}}</span>' +
                                    '<a class="comment-icon news-collect-image"  href="javascript:"></a>' +
                              '</div>' +
                              '<div>' +
                                    '<span class="news-like comment">{{like}}</span>' +
                                    '<a class="comment-icon news-like-image"  href="javascript:"></a>' +
                              '</div>' +
                        '</div>' +
                        '<div class="news">' +
                              '<div class="news-topic">{{topic}}</div>' +
                              '<div class="news-content">{{{content}}}</div> '+
                        '</div>' +
                  '</div>' +
                  '{{/news}}' +
                  '{{^news}}<img src="../images/news.jpg" />{{/news}}'
	}
});