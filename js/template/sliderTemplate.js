define(function() {
    return {
        sliderFrameTemplate: '<h1 id="content-title">{{sliderTitle}}</h1>'+
            '<div id="slider-warp">'+
                '<div id="slider-nav">'+
                    '<a id="pre" class="slider-nav-button" href="javascript:">&lt;</a>'+
                    '<a id="next" class="slider-nav-button" href="javascript:">&gt;</a>'+
                    '<div id="slider-list-warp">'+
                        '<ul id="slider-list">'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div id="detail">'+
                    '<img id="detail-content" />'+
                '</div>'+
            '</div>',
            
        sliderDataListTemplate: '{{#sliderList}}'+
            '<li class="slider-content  {{selected}}"><img class="slider-image" src="{{imageUrl}}"/></li>'+
            '{{/sliderList}}',
            
        sliderDetailPagination: '<ul id="detail-pagination">'+
                        '{{#sliderDetailCount}}'+
                            '<li class="pagination-dot"></li>'+
                        '{{/sliderDetailCount}}'+
                    '</ul>'
    }
});
