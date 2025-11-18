import { questions } from "../questions.js";
import { saveIndex, loadIndex } from "../storage.js";

export function loadQuizPage(main) {
  main.innerHTML = `
    <h2>Spurningar</h2>
    <div id="quiz-container">
      <div id="question-area">
        <p id="question-text"></p>
        <p id="answer-text" style="display:none; font-weight:bold;"></p>
      </div>
      <div id="quiz-buttons">
        <button id="toggleAnswerBtn">Sýna svar</button>
        <button id="prevBtn">Fyrri</button>
        <button id="nextBtn">Næsta</button>
      </div>
    </div>
  `;

  let currentIndex = loadIndex();

  const questionText = document.getElementById("questionText");
  const answerText = document.getElementById("answerText");
  const toggleAnswerBtn = document.getElementById("toggleAnswerBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function renderQuestion() {
    const q = questions[currentIndex];
    questionText.textContent = q.question;
    answerText.style.display = "none";
    toggleAnswerBtn.textContent = "Sýna svar";

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;

    saveIndex(currentIndex);
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  });

  toggleAnswerBtn.addEventListener("click", () => {
    if (answerText.style.display === "none") {
      answerText.textContent = questions[currentIndex].answer;
      answerText.style.display = "block";
      toggleAnswerBtn.textContent = "Fela svar";
    } else {
      answerText.style.display = "none";
      toggleAnswerBtn.textContent = "Sýna svar";
    }
  });

  renderQuestion();
}
