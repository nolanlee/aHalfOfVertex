define(['lib/mustache', 'template/sliderTemplate'], function(Mustache, SliderTemplate) {
    var Slider = {},
        sliderIndex = 1,
        $content = $('#content');

    var renderSliderFrame = function(title) {
        $content.append(Mustache.rendered(SliderTemplate.sliderFrameTemplate, {
            sliderTitle : title
        }));
    };

    var renderSliderData = function(dataList) {
        $content.append(Mustache.rendered(SliderTemplate.sliderDataListTemplate, dataList));
    };

    var getData = function(dataUrl, handler) {
        $.get(dataUrl, function(dataList) {
            handler(dataList);
        });
    };
    
    var detailListenrer = function() {
        $('.slider-content').click(function() {
            
        });
    };

    var sliderListener = function(callBack) {
        var offset = 0;
        $('#pre').click(function() {
            offset -= 160;
            $("#slider-list").animate({
                left : offset
            }, 500);
        });

        $('#next').click(function() {
            if(offset <= 0) {
               offset += 160;
                $("#slider-list").animate({
                    left : offset
                }, 500); 
            }
        });
    };

    Slider.init = function(title, dataUrl, detailPagination) {
        $content.empty();
        renderSliderFrame(title);
    };

    return Slider;
});
