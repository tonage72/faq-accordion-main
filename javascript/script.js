const plus = document.querySelectorAll('.plus');
const questionAnswer = document.querySelectorAll('.question-answer')
const question = document.querySelectorAll('.question');

for (i=0; i < questionAnswer.length; i++) {
	questionAnswer[i].addEventListener('click', function() {

		if (this.classList.contains('active')) {
			for (i = 0; i < questionAnswer.length; i++) {
				questionAnswer[i].classList.remove('active');
				question[i].style.color = "black";
			}
		} else {
			for (i = 0; i < questionAnswer.length; i++) {
				questionAnswer[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}