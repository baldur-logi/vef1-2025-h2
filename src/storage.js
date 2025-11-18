const KEY = "pubquiz-current-index";

export function saveIndex(i) {
    localStorage.setItem(KEY, JSON.stringify(i));
}

export function loadIndex() {
    const stored = localStorage.getItem(KEY);
    if (stored === null) return 0;
    return parseInt(stored, 10);
}