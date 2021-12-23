function quiz(questions) {
this.score = 0;
this.questions = questions;
this.questionsIndex = 0;
}

quiz.prototype.getQustionsIndex = function () {
return this.questions[this.questionsIndex];
}

quiz.prototype.isEnded  = function() {
return this.questions.length === this.questionsIndex;
}

quiz.prototype.guess = function(answer) {
this.questionsIndex++;

if(this.getquestionsIndex().correctAnswer(answer)) {
this.score++;
   }
}