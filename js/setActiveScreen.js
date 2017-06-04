export default function setActiveScreen(screen) {
  const mainScreen = document.getElementById(`main`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
}
