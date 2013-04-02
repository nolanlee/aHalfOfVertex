define(['lib/mustache', 'lib/masonry.min', 'module/common/pagination', 'template/paitingTemplate'],

function(Mustache, Masonry, Pagination, PaitingTemplate) {
	var Paiting = {},
	$content = $('#content'),
	PAITING_URL = '../json/paiting.json';

	var waterFall = function($paitingList) {
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

	Paiting.init = function() {
		var $paitingList;
		$content.empty();
		$content.html(Mustache.render(PaitingTemplate.paitingTemplate));
		$paitingList = $('.paiting-list');
		Pagination.init($paitingList, PaitingTemplate.paitingListTemplate, PAITING_URL);
		//waterFall($paitingList);
	};

	return Paiting;
});