export default function setActiveScreen(screen) {
  const mainScreen = document.querySelector(`.central`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
}
