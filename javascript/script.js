const questionAnswer = document.querySelectorAll('.question-answer')

for (i=0; i < questionAnswer.length; i++) {
	questionAnswer[i].addEventListener('click', function() {

		if (this.classList.contains('active')) {
			for (i = 0; i < questionAnswer.length; i++) {
				questionAnswer[i].classList.remove('active');
			}
		} else {
			for (i = 0; i < questionAnswer.length; i++) {
				questionAnswer[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}