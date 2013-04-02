define(function(){
	return {
            paginationReadyTemplate: '<img id="loading-img" src="{{loadingImg}}"></img>' +
                '<div id="pagination-wrap"></div>',
		paginationTemplate: 
                  '<ul id="pagination">' +
                        '<li><a id="previous" class="pagination-button {{#preEnabled}}button-enabled{{/preEnabled}} {{#preDisabled}}button-disabled{{/preDisabled}}" href="javascript:">FRONT</a></li>' +
                        '{{#pageNumList}}' +
                        '<li><a class="page-num {{#pageSelected}}page-num-selected{{/pageSelected}}" href="javascript:">{{pageNum}}</a></li>' +
                        '{{#pageBreak}}<li><span>......<span></li>{{/pageBreak}}' +
                        '{{/pageNumList}}' +
                        '<li><a id="next" class="pagination-button {{#nextEnabled}}button-enabled{{/nextEnabled}} {{#nextDisabled}}button-disabled{{/nextDisabled}}" href="javascript:">NEXT</a></li>' +
                        '<li><input id="page-num" type="text"/></li>' +
                        '<li><a id="go" class="pagination-button button-enabled" href="javascript:">GO</a></li>' +
                  '</ul>'
	}
});