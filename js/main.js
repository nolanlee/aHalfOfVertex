requirejs.config({
    baseUrl: '../js',
    paths: {
        module: 'module',
        template: 'template',
        lib: 'lib'
    }
});

requirejs(['module/home/home', 'module/common/header'],

function(Home, Header) {
    Header.init();
    Home.init();
});