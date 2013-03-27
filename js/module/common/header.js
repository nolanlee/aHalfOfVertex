define(['module/contact/contact','module/home/home','module/paiting/paiting'],
function(Contact, Home, Paiting) {
	var $content = $('#content'),
		$gotoContact = $('#gotoContact'),
		$gotoHome = $('#gotoHome'),
		$gotoFavorite = $('#gotoFavorite');

	var navigateToContact = function() {
		Contact.init();
		Contact.loadQuestions();
	};

	var navigateToHome = function() {
		Home.init();
	};

	var navigateToFavorite = function() {
		Paiting.init();
	};

	var navigateListener = function() {
		$gotoContact.on('click', navigateToContact);
		$gotoHome.on('click', navigateToHome);
		$gotoFavorite.on('click', navigateToFavorite);
	};

	var draw = function() {
		$("#global-nav .global-nav-button").click(function() {
			$("#global-nav .global-nav-button-selected").removeClass("global-nav-button-selected");
			$(this).addClass("global-nav-button-selected");
		});

		$("#nav-primary .nav-primary-button").click(function() {
			$("#nav-primary .nav-primary-button-selected").removeClass("nav-primary-button-selected");
			$(this).addClass("nav-primary-button-selected");
		});
	};

	return {
		init: function() {
			draw();
			navigateListener();
		}
	}
});