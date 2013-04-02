define(['lib/mustache', 'template/aboutTemplate'], function(Mustache, AboutTemplate) {
	var About = {},
		$content = $('#content');

	About.init = function() {
		$content.empty();
		$content.html(Mustache.render(AboutTemplate.aboutTemplate));
	};

	return About;
});