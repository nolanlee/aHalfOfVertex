define(['module/common/pagination', 'lib/mustache', 'template/wallpaperTemplate'], function(Pagination, Mustache, WallpaperTemplate) {
    var Wallpaper = {},
        $content = $('#content'),
        WALLPAPER_URL = '../json/wallpaper.json';
        
    Wallpaper.init = function() {
        $content.empty();
        $content.html(Mustache.render(WallpaperTemplate.wallpaperFrameTemplate));
        if(Pagination.WaterFall) {
            Pagination.WaterFall = null;
        }
        Pagination.init($('#wallpaper-wrap'), WallpaperTemplate.wallpaperContentTemplate, WALLPAPER_URL);
    };
    
    return Wallpaper;
});
