define(['lib/mustache', 'lib/masonry.min', 'templete/paitingTemplete'],

function(Mustache, Masonry, PaitingTemplete) {
	var Paiting = {},
	$content = $('#content');

	var renderPaitingList = function(waterFall) {
		$.get("../json/paiting.json", function(data) {
			$content.html(Mustache.render(PaitingTemplete.paitingTemplete, data));
			waterFall($(".paiting-list"));
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
		renderPaitingList(waterFall);
	};

	return Paiting;
});