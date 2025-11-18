import { questions } from "../questions.js";
import { saveIndex, loadIndex } from "../storage.js";

export function loadQuizPage(main) {
  main.innerHTML = `
    <h2>Spurningar</h2>
    <div id="quiz-container">
      <div id="question-area">
        <p id="question-text"></p>
        <p id="answer-text" style="display:none; font-weight:bold;"></p>
        <div id="fullscreen-hint">Ýttu á F til að fara í fullscreen viðmót</div>
      </div>
      <div id="quiz-buttons">
        <button id="toggleAnswerBtn">Sýna svar</button>
        <button id="prevBtn">Fyrri</button>
        <button id="nextBtn">Næsta</button>
      </div>
    </div>
  `;

  let currentIndex = loadIndex();

  const questionText = document.getElementById("question-text");
  const answerText = document.getElementById("answer-text");
  const toggleAnswerBtn = document.getElementById("toggleAnswerBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const fullscreenHint = document.getElementById("fullscreen-hint");
  const quizContainer = document.getElementById("quiz-container");

  quizContainer.style.background = "white";
  quizContainer.style.maxWidth = "600px";
  quizContainer.style.minHeight = "12em";

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

  document.addEventListener("keydown", (e) => {
    if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) {
        quizContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
    if (document.fullscreenElement) {
      if (e.key === "a" || e.key === "A") {
        if (currentIndex > 0) {
          currentIndex--;
          renderQuestion();
        }
      }
      if (e.key === "d" || e.key === "D") {
        if (currentIndex < questions.length - 1) {
          currentIndex++;
          renderQuestion();
        }
      }
      if (e.key === " ") {
        e.preventDefault();
        toggleAnswerBtn.click();
      }
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
      fullscreenHint.textContent =
        "Stýringar:\nEsc = fara úr fullscreen.\nA/D = fyrri/næsta spurning.\nSpacebar = sýna svar.";
      fullscreenHint.style.position = "absolute";
      fullscreenHint.style.top = "0.5rem";
      fullscreenHint.style.right = "0.5rem";
      fullscreenHint.style.background = "rgba(255,255,255,0.8)";
      fullscreenHint.style.padding = "0.5rem";
      fullscreenHint.style.borderRadius = "4px";
      fullscreenHint.style.fontSize = "clamp(0.8rem, 1.5vw, 1rem)";
    } else {
      fullscreenHint.textContent = "Ýttu á F til að fara í fullscreen viðmót";
      fullscreenHint.style.position = "static";
      fullscreenHint.style.background = "transparent";
      fullscreenHint.style.padding = "0";
      fullscreenHint.style.borderRadius = "0";
      fullscreenHint.style.fontSize = "";
    }
  });

  renderQuestion();
}