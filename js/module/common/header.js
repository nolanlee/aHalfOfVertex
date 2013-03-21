define(function() {
	return {
		init: function() {
			$("#global-nav .global-nav-button").click(function() {
				$("#global-nav .global-nav-button-selected").removeClass("global-nav-button-selected");
				$(this).addClass("global-nav-button-selected");
			});

			$("#nav-primary .nav-primary-button").click(function() {
				$("#nav-primary .nav-primary-button-selected").removeClass("nav-primary-button-selected");
				$(this).addClass("nav-primary-button-selected");
			});
		}
	}
});