define(function() {
	return {
		contentTemplate: '<h1 id="content-title">CONTACT</h1>'+
			'<div id="contact-content">'+
				'<div id="message-content">'+
					'<div id="meassage-header">MESSAGE</div>'+
					'<div class="input-control">'+
						'<label class="message-label" for="message-name">*NAME:</label>'+
						'<input id="message-name" class="message-input" type="text" />'+
					'</div>'+
					'<div class="input-control">'+
						'<label class="message-label" for="message-email">*EMAIL:</label>'+
						'<input id="message-email" class="message-input" type="email" />'+
					'</div>'+
					'<div class="input-control">'+
						'<label class="message-label" for="message-website">WEBSITE:</label>'+
						'<input id="message-website" class="message-input" type="url" />'+
					'</div>'+
					'<div class="input-control">'+
						'<label id="meassage-label" for="message-words">*LEAVE YOUR WORDS:</label>'+
						'<textarea id="message-words"></textarea>'+
					'</div>'+
					'<a id="submit-message" href="javascript:">SUBMIT</a>'+
				'</div>'+
				'<div id="question-content">'+
					'<div id="question-header">Q&amp;A</div>'+
					'<img id="loading" src="../images/loading2.gif" />'+
				'</div>'+
			'</div>',
		questinonListTemplate: '<ul id="question-body">'+
					'{{#questionList}}'+
						'<li>'+
							'<span class="question">{{question}}</span>'+
							'<span class="answer">{{answer}}</span>'+
						'</li>'+
					'{{/questionList}}'+
				'</ul>'+
				'{{#isMore}}<a id="more-question" href="javascript:">MORE</a>{{/isMore}}',
		contactOutsaideTemplate:' <div class="contact-outside-list">'+
			'<img class="contact-outside" src="../images/logo-douban.png" />'+
			'<img class="contact-outside" src="../images/logo-weibo.png" />'+
			'<img class="contact-outside" src="../images/logo-douban.png" />'+
			'<img class="contact-outside" src="../images/logo-weibo.png" />'+
			'<img class="contact-outside" src="../images/logo-douban.png" />'+
			'<img class="contact-outside" src="../images/logo-weibo.png" />'+
		'</div>'+
		'<div class="contact-outside-list">'+
			'<img class="contact-outside" src="../images/logo-douban.png" />'+
			'<img class="contact-outside" src="../images/logo-weibo.png" />'+
			'<img class="contact-outside" src="../images/logo-douban.png" />'+
			'<img class="contact-outside" src="../images/logo-weibo.png" />'+
			'<img class="contact-outside" src="../images/logo-douban.png" />'+
			'<img class="contact-outside" src="../images/logo-weibo.png" />'+
		'</div>'
	}
});