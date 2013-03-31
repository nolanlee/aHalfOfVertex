define(['lib/mustache', 'lib/masonry.min', 'templete/paitingTemplete'],

function(Mustache, Masonry, PaitingTemplete) {
	var Paiting = {},
	$content = $('#content');

	var renderPaitingList = function(waterFall) {
		$.get("../json/paiting.json", function(data) {
			var $paitingList = $('.paiting-list');
			if($paitingList) {
				$paitingList.html(Mustache.render(PaitingTemplete.paitingListTemplete, data));
				waterFall($paitingList);
			}
		});
	};

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
		$content.empty();
		$content.html(Mustache.render(PaitingTemplete.paitingTemplete));
		renderPaitingList(waterFall);
	};

	return Paiting;
});