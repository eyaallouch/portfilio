var questions = [
  {
    question: "What is the capital of France?",
    reposes: ["Paris", "London", "Rome"],
    correcte: 1,
  },
  {
    question: "What is the capital of Allemagne?",
    reposes: ["Camberra", "Berline", "Rome"],
    correcte: 2,
  },
];
var indexQuestionActuel = 0;
var nbRC = 0;

loadQuiz(indexQuestionActuel);

function checkResponse(question) {
  if (question == "") {
    alert("reponse vide");
    return;
  }
  var correcteResponse = questions[indexQuestionActuel].correcte;
  if (correcteResponse == question) {
    alert("reponse correcte");
    nbRC++;
  } else
    alert(
      "reponse incorrecte ... la bonne reponse est " +
        questions[indexQuestionActuel].reposes[correcteResponse - 1]
    );
  deselectAnswers();
  indexQuestionActuel++;
  if (indexQuestionActuel == questions.length)
    alert("Quiz terminer... nombre question correcte est " + nbRC);
  else loadQuiz(indexQuestionActuel);
}

function loadQuiz(index) {
  const question = document.getElementById("Q");
  question.innerHTML = questions[index].question;
  questions[index].reposes.forEach((response, i) => {
    document.getElementById("r" + (i + 1)).innerHTML = response;
  });
}

var bt = document.getElementById("bt");
bt.addEventListener("click", function (e) {
  e.preventDefault();
  var answer = document.querySelector("input[name=answer]:checked").value;
  checkResponse(answer);
});

function deselectAnswers() {
  const answerElements = document.querySelectorAll("input[name=answer]");
  answerElements.forEach((answer) => (answer.checked = false));
}
