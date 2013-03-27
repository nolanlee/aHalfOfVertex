define(['lib/mustache', 'templete/contactTemplete'], function(Mustache, ContactTemplete) {
	var Contact = {},
		$content = $('#content'),
		QUESTION_URL = '../json/question.json',
		$questionContent,
		$loadingImg;

	Contact.init = function() {
		$content.empty();
		$content.html(Mustache.render(ContactTemplete.contentTemplete));
		$content.append(Mustache.render(ContactTemplete.contactOutsaideTemplete));
		$questionContent = $('#question-content');
		$loadingImg = $('#loading');
	};

	Contact.loadQuestions = function() {
		if($questionContent) {
			$.get(QUESTION_URL, function(data) {
				if($loadingImg) {
					$loadingImg.remove();
				}
				$questionContent.append(Mustache.render(ContactTemplete.questinonListTemplete, data));
			});
		}
	};

	return Contact;
});