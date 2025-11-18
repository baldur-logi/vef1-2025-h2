import { loadHomePage } from "./pages/home.js";
import { loadQuizPage } from "./pages/quizPage.js";

export function router() {
  const page = window.location.hash.replace("#/", "") || "home";

  const main = document.getElementById("site-main");

  if (page === "quiz") {
    loadQuizPage(main);
  } else {
    loadHomePage(main);
  }
}