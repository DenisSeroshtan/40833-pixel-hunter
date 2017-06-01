import getElementFromTemplate from './getElementFromTemplate.js';
import templateGreeting from './templateGreeting.js';
import footer from './templateFooter.js';
import setActiveScreen from './setActiveScreen.js';

const templateIntro = getElementFromTemplate(`
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
  ${footer}
`);

const asteriskButton = templateIntro.querySelector(`.intro__asterisk`);

asteriskButton.addEventListener(`click`, () => {
  setActiveScreen(templateGreeting);
});

export default templateIntro;
