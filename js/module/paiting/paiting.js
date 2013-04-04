define(['lib/mustache', 'lib/masonry.min', 'module/common/pagination', 'template/paitingTemplate'],

function(Mustache, Masonry, Pagination, PaitingTemplate) {
	var Paiting = {},
	WaterFall = {},
	$content = $('#content'),
	PAITING_URL = '../json/paiting.json';

	WaterFall.waterFallInit = function($paitingList) {
		if ($paitingList) {
			$paitingList.imagesLoaded(function() {
				$paitingList.masonry({
					itemSelector: '.paiting',
					isFitWidth: true,
					columnWidth: 10
				});
			});
		}
	};

	WaterFall.waterFallAppend = function($paitingList, newContent) {
		if ($paitingList) {
			$paitingList.masonry('appended', newContent);
		}
	};

	WaterFall.waterFallReloadItems = function($paitingList) {
		if ($paitingList) {
			$paitingList.imagesLoaded(function() {
				$paitingList.masonry('reloadItems');
			});
		}
	};

	WaterFall.waterFallReload = function($paitingList) {
		if ($paitingList) {
			$paitingList.imagesLoaded(function() {
				$paitingList.masonry('reload');
			});
		}
	};

	Paiting.init = function() {
		var $paitingList;
		$content.empty();
		$content.html(Mustache.render(PaitingTemplate.paitingTemplate));
		$paitingList = $('.paiting-list');
		Pagination.init($paitingList, PaitingTemplate.paitingListTemplate, PAITING_URL, WaterFall);
	};

	return Paiting;
});