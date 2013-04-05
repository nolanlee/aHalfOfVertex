define(function() {
    var Vi = {},
        $content = $('#content');
        
    var html = '<h1 id="content-title">VI</h1>'+
            '<div id="vi-wrap">'+
               ' <div class="vi-owner-list">'+
                    '<div class="vi-owner">'+
                        '<div class="vi-owner-photo"></div>'+
                        '<span class="vi-owner-info vi-owner-name">NAME</span>'+
                        '<span class="vi-owner-info vi-owner-time">TIME</span>'+
                        '<span class="vi-owner-info vi-owner-desc">INFO</span>'+
                    '</div>'+'<div class="vi-owner">'+
                        '<div class="vi-owner-photo"></div>'+
                        '<span class="vi-owner-info vi-owner-name">NAME</span>'+
                        '<span class="vi-owner-info vi-owner-time">TIME</span>'+
                        '<span class="vi-owner-info vi-owner-desc">INFO</span>'+
                    '</div>'+'<div class="vi-owner">'+
                        '<div class="vi-owner-photo"></div>'+
                        '<span class="vi-owner-info vi-owner-name">NAME</span>'+
                        '<span class="vi-owner-info vi-owner-time">TIME</span>'+
                        '<span class="vi-owner-info vi-owner-desc">INFO</span>'+
                    '</div>'+
                    '<div class="vi-owner">'+
                        '<div class="vi-owner-photo"></div>'+
                        '<span class="vi-owner-info vi-owner-name">NAME</span>'+
                        '<span class="vi-owner-info vi-owner-time">TIME</span>'+
                        '<span class="vi-owner-info vi-owner-desc">INFO</span>'+
                    '</div>'+
                '</div>'+
                '<div class="vi-owner-arrow"></div><div class="vi-content"></div>'+
            '</div>';

    Vi.init = function() {
        $content.empty();
        $content.append(html);
    }

    return Vi;
});
