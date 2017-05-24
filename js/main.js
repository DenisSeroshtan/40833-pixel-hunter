const mainScreen = document.querySelector(`main.central`);
const screens = document.querySelectorAll(`template`);
let currentScreenIndex = 1;

const setActiveScreen = (number) => {
  const screenContent = screens[number];
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenContent.content.cloneNode(true));
};

const nextScreen = () => {
  if (currentScreenIndex < (screens.length - 1)) {
    setActiveScreen(++currentScreenIndex);
  }
};

const prevScreen = () => {
  if (currentScreenIndex > 0) {
    setActiveScreen(--currentScreenIndex);
  }
};

setActiveScreen(currentScreenIndex);

document.addEventListener(`keydown`, (event) => {
  if (event.altKey) {
    switch (event.keyCode) {
      case 39:
        nextScreen();
        break;
      case 37:
        prevScreen();
        break;
    }
  }
});
