define(['module/common/pagination', 'lib/mustache', 'template/homeTemplate', 'template/newsTemplate'],
function(Pagination, Mustache, HomeTemplate, NewsTemplate) {
	var Home = {},
	$content = $('#content'),
	NEWS_URL = '../json/home.json';

	Home.init = function() {
		$content.empty();
		$content.html(Mustache.render(HomeTemplate.homeTemplate));
		if(Pagination.WaterFall) {
			Pagination.WaterFall = null;
		}
		Pagination.init($('#news-list'), NewsTemplate.newsTemplate, NEWS_URL);
	};
	
	return Home;
});