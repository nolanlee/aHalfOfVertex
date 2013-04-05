define(function() {
    return {
        wallpaperFrameTemplate: 
            '<h1 id="content-title">WALLPAPER</h1>'+
            '<div id="wallpaper-wrap">'+
            '</div>',
            
        wallpaperContentTemplate:
            '{{#wallpaperList}}'+
                '<div class="wallpaper-content">'+
                    '<img class="wallpaper" src="{{wallpaperUrl}}"/>'+
                    '<div class="wallpaper-info">'+
                        '<div class="wallpaper-info-wrap">'+
                            '<span class="wallpaper-label">NAME:</span>'+
                            '<span class="wallpaper-name">{{wallpaperName}}</span>'+
                        '</div>'+
                        '<div class="wallpaper-info-wrap">'+
                            '<span class="wallpaper-label">SIZE:</span>'+
                            '<ul class="wallpaper-size-list">'+
                                '<li><a class="wallpaper-size" href="javascript:">800*600</a></li>'+
                                '<li><a class="wallpaper-size"  href="javascript:">1024*768</a></li>'+
                                '<li><a class="wallpaper-size" href="javascript:">1280*960</a></li>'+
                                '<li><a class="wallpaper-size" href="javascript:">1600*1200</a></li>'+
                                '<li><a class="wallpaper-size" href="javascript:">1280*1024</a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '{{/wallpaperList}}'
    }
});