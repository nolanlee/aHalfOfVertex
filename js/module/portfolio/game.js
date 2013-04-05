define(['module/common/slider'], function(Slider) {
    //----------------------TEMP---------------------------
    var tempInit = function() {
        var html = '<h1 id="content-title">GAME</h1><div id="slider-warp">'+
                '<div id="slider-nav">'+
                    '<a id="pre" class="slider-nav-button" href="javascript:">&lt;</a>'+
                    '<a id="next" class="slider-nav-button" href="javascript:">&gt;</a>'+
                    '<div id="slider-list-warp">'+
                        '<ul id="slider-list">'+
                            '<li class="slider-content selected"><img class="slider-image" src="../images/news.jpg"/></li><li class="slider-content"><img class="slider-image" src="../images/news.jpg"/></li><li class="slider-content"><img class="slider-image" src="../images/resume.JPEG"/></li><li class="slider-content"><img class="slider-image" src="../images/news.jpg"/></li><li class="slider-content"><img class="slider-image" src="../images/news.jpg"/></li><li class="slider-content"><img class="slider-image" src="../images/news.jpg"/></li><li class="slider-content"><img class="slider-image" src="../images/news.jpg"/></li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div id="detail">'+
                    '<img id="detail-content" src="../images/news.jpg"/>'+
                '</div>'+
            '</div>';
        $('#content').empty();
        $('#content').html(html);
        
        var offset = 0;
        $('#pre').click(function() {
            if (offset <= (-160 * 2)) {
                return;
            }
            offset -= 160;
            $("#slider-list").animate({
                left : offset
            }, 500);
        });
        $('#next').click(function() {
            if (offset >= 0) {
                return;
            }
            offset += 160;
            $("#slider-list").animate({
                left : offset
            }, 500);
        });

        $('.slider-content').click(function() {
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            $('#detail-content').attr('src', $(this).find('.slider-image').attr('src'));
        });

        $('.pagination-dot').click(function() {
            $('.pagination-dot').removeClass('pagination-dot-selected');
            $(this).addClass('pagination-dot-selected');
        });
    }
    //--------------------------------------------------------
    return {
        init: tempInit
    }
});
