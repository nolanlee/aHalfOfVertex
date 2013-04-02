define(['lib/mustache', 'template/contactTemplate'], function(Mustache, contactTemplate) {
	var Contact = {},
		$content = $('#content'),
		QUESTION_URL = '../json/question.json',
		$questionContent,
		$loadingImg;

	Contact.init = function() {
		$content.empty();
		$content.html(Mustache.render(contactTemplate.contentTemplate));
		$content.append(Mustache.render(contactTemplate.contactOutsaideTemplate));
		$questionContent = $('#question-content');
		$loadingImg = $('#loading');
	};

	Contact.loadQuestions = function() {
		if($questionContent) {
			$.get(QUESTION_URL, function(data) {
				if($loadingImg) {
					$loadingImg.remove();
				}
				$questionContent.append(Mustache.render(contactTemplate.questinonListTemplate, data));
			});
		}
	};

	return Contact;
});