requirejs.config({
    baseUrl: '../js',
    paths: {
        module: 'module',
        templete: 'templete',
        lib: 'lib'
    }
});

requirejs(['module/home/pagination', 'module/common/header'],

function(pagination, header) {
    header.init();
    pagination.init();
});