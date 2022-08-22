export function setLocalStorage(key, array) {
  return localStorage.setItem(key, JSON.stringify(array));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
