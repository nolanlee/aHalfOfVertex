define(['lib/mustache', 'templete/aboutTemplete'], function(Mustache, AboutTemplete) {
	var About = {},
		$content = $('#content');

	About.init = function() {
		$content.empty();
		$content.html(Mustache.render(AboutTemplete.aboutTemplete));
	};

	return About;
});