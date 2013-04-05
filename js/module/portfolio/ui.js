define(['lib/mustache', 'module/common/pagination', 'template/uiTemplate'], function(Mustache, Pagination, UiTemplate) {
    var Ui = {},
        $content = $('#content'),
        UI_URL = '../json/ui.json';
    
    Ui.init = function() {
        $content.empty();
        $content.html(Mustache.render(UiTemplate.uiFrameTemplate));
        if(Pagination.WaterFall) {
            Pagination.WaterFall = null;
        }
        Pagination.init($('#ui-wrap'), UiTemplate.uiDataTemplate, UI_URL); 
    };
    
    return Ui;
});
