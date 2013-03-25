define(['module/home/pagination', 'lib/mustache', 'templete/homeTemplete'], function(Pagination, Mustache, HomeTemplete) {
	var Home = {},
	$content = $('#content');

	Home.init = function() {
		$content.empty();
		$content.html(Mustache.render(HomeTemplete.homeTemplete));
		Pagination.init($('#news-list'), $('#loading-img'), $('#pagination-wrap'));
	};
	
	return Home;
});