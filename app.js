function populate() {
if(quiz.isEnded()) {
//showscores();
}
else {
// show questions
var element = document.getelementbyid("question");
element.innerHTML = quiz.getQuestionIndex().text;

//show choices
var choices =quiz.getquestionsindex().choices;
for(var i = 0, i< choices.lenght, i++){
var element = documentelementbyid("choices" +i);
element.innerhtml = choices[i];
}
  }

}


var Questions = [
new Questions("which player hit most number of sixes in odi cricket?", ["rohit", "virat", "gayle", "smith"], "rohit"),
new Questions("which player hit ost number of fours in odi cricket?", ["rohit","virat", "williams", "smith"], "rohit"),
new Questions("which player hit hightest score in odi cricket?", ["rohit", "virat", "sachine", "smith"], "rohit"),
new Questions("which batsmen player take a hattrick in ipl?", ["rohit", "virat", "sahwage", "smith"], "rohit"),
new Questions("which player hit 264 runs in odi cricket?", ["rohit", "virat", "gayle",  "smith"], "rohit")
];

var quiz = new Quiz(questions);

populate();