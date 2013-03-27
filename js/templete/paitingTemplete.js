define(function(){
	return {
		paitingTemplete : '<h1 id="content-title">PAITING</h1>'+
			'<div class="paiting-list">'+
				'{{#paitingList}}'+
				'<div class="paiting">'+
					'<img src="{{imageUrl}}"/>'+
					'<p class="paiting-description">{{description}}</p>'+
				'</div>'+
				'{{/paitingList}}'+
			'</div>'+
		'</div>'
	}
});