define(['module/contact/contact','module/home/home','module/paiting/paiting', 'module/about/about', 'module/portfolio/web', 'module/portfolio/ui', 'module/portfolio/vi', 'module/portfolio/wallpaper', 'module/portfolio/photo'],
function(Contact, Home, Paiting, About, Web, Ui, Vi, Wallpaper, Photo) {
	var $content = $('#content'),
		$gotoContact = $('#gotoContact'),
		$gotoHome = $('#gotoHome'),
		$gotoFavorite = $('#gotoFavorite'),
		$gotoAbout = $('#gotoAbout'),
		$gotoPaniting = $('#gotoPaniting'),
		$gotoBook = $('#gotoBook'),
		$gotoVI = $('#gotoVI'),
		$gotoUI = $('#gotoUI'),
		$gotoPoster = $('#gotoPoster'),
		$gotoWEB = $('#gotoWEB'),
		$gotoArchitecture = $('#gotoArchitecture'),
		$gotoPhoto = $('#gotoPhoto');

	var navigateToContact = function() {
		Contact.init();
		Contact.loadQuestions();
	};

	var navigateToHome = function() {
		Home.init();
	};

	var navigateToPaniting = function() {
		Paiting.init();
	};
	var navigateToAbout = function() {
		About.init();
	};
	
	var navigateToWeb = function() {
	    Web.init();
	};
	
	var navigateToUi = function() {
        Ui.init();
    };
    
    var navigateToVi = function() {
        Vi.init();
    };

    var navigateToPoster = function() {
        Wallpaper.init();
    };
    
    var navigateToPhoto = function() {
        Photo.init();
    };

	var navigateListener = function() {
		$gotoContact.on('click', navigateToContact);
		$gotoHome.on('click', navigateToHome);
		$gotoPaniting.on('click', navigateToPaniting);
		$gotoAbout.on('click', navigateToAbout);
		$gotoWEB.on('click', navigateToWeb);
		$gotoUI.on('click', navigateToUi);
		$gotoVI.on('click', navigateToVi);
		$gotoPoster.on('click', navigateToPoster);
		$gotoPhoto.on('click', navigateToPhoto);
	};

	var navigationStyleListener = function() {
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
			navigationStyleListener();
			navigateListener();
		}
	}
});