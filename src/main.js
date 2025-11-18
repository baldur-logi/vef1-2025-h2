import { loadHeader } from "./components/header.js";
import { loadNav } from "./components/nav.js";
import { loadFooter } from "./components/footer.js";
import { router } from "./router.js";
import "./styles/style.css";

function renderLayout() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <header id="site-header"></header>
    <nav id="site-nav"></nav>
    <main id="site-main"></main>
    <footer id="site-footer"></footer>
  `;

  loadHeader();
  loadNav();
  loadFooter();
}

renderLayout();
router();

window.addEventListener("hashchange", router);