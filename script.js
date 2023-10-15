document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#startButtonQuiz');
  startButton.addEventListener('click', startQuiz);
});
function startQuiz() {
  const questions = [
    {
      question: "Who is the main character in Assassin's Creed Odyssey?",
      options: ["Ezio Auditore", "Alexios", "Altair Ibn-La'Ahad", "Edward Kenway"],
      answer: 1
    },
    {
      question: "In which time period is Assassin's Creed Unity set?",
      options: ["Ancient Egypt", "Renaissance Italy", "French Revolution", "Viking Age"],
      answer: 2
    },
    {
      question: "Which organization do the Assassins oppose?",
      options: ["Templars", "Illuminati", "Mafia", "Ninja Clans"],
      answer: 0
    }
  ];
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i].question + "\nOptions: " + questions[i].options.join(", "));
    if (userAnswer && userAnswer.toLowerCase() === questions[i].options[questions[i].answer].toLowerCase()) {
      score++;
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }
  }
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Quiz completed! Your score is: " + score + " out of " + questions.length;
}