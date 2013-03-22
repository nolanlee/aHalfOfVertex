define(function(){
	return {
		newsTemplete: '{{#news}}'+
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
                  '{{^news}}<img src="../images/news.jpg" />{{/news}}',

            paginationTemplate: 
                  '<div id="pagination-wrap">' +
                        '<ul id="pagination">' +
                              '<li><a id="previous" class="pagination-button {{#preEnabled}}button-enabled{{/preEnabled}} {{#preDisabled}}button-disabled{{/preDisabled}}" href="javascript:">FRONT</a></li>' +
                              '{{#pageNumList}}' +
                              '<li><a class="page-num {{#pageSelected}}page-num-selected{{/pageSelected}}" href="javascript:">{{pageNum}}</a></li>' +
                              '{{#pageBreak}}<li><span>......<span></li>{{/pageBreak}}' +
                              '{{/pageNumList}}' +
                              '<li><a id="next" class="pagination-button {{#nextEnabled}}button-enabled{{/nextEnabled}} {{#nextDisabled}}button-disabled{{/nextDisabled}}" href="javascript:">NEXT</a></li>' +
                              '<li><input id="page-num" type="text"/></li>' +
                              '<li><a id="go" class="pagination-button button-enabled" href="javascript:">GO</a></li>' +
                        '</ul>' +
                  '</div>'
	}
});