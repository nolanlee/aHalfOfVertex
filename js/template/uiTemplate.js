define(function() {
    return {
        uiFrameTemplate: '<h1 id="content-title">UI</h1>'+
            '<div id="ui-wrap">'+
            '</div>',
            
        uiDataTemplate:'{{#uiDataList}}'+ 
                '<div class="ui-area">'+
                    '<div class="ui-owner">'+
                        '<div class="ui-owner-photo"></div>'+
                        '<span class="ui-owner-info ui-owner-name">NAME</span>'+
                        '<span class="ui-owner-info ui-owner-time">TIME</span>'+
                        '<span class="ui-owner-info ui-owner-desc">INFO</span>'+
                    '</div>'+
                    '<div class="ui-content"></div>'+
                '</div>'+
                '{{/uiDataList}}'
    };
});
