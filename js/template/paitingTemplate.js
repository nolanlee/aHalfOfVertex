define(function(){
	return {
		paitingTemplate : '<h1 id="content-title">PAITING</h1>'+
			'<div class="paiting-list">'+
			'</div>'+
		'</div>',
		paitingListTemplate: '{{#paitingList}}'+
				'<div class="paiting">'+
					'<img src="{{imageUrl}}"/>'+
					'<p class="paiting-description">{{description}}</p>'+
				'</div>'+
				'{{/paitingList}}'
	}
});