// wip

export function saveIndex(i) {
  localStorage.setItem("currentQuestion", i);
}

export function loadIndex() {
  return Number(localStorage.getItem("currentQuestion"));
}