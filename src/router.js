import { loadHomePage } from "./pages/home.js";
import { loadQuizPage } from "./pages/quizPage.js";

export function router() {
  const main = document.getElementById("site-main");
  const hash = window.location.hash;

  if (hash === "#quiz") {
    loadQuizPage(main);
  } else {
    loadHomePage(main);
  }
}