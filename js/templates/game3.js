import getElementFromTemplate from '../getElementFromTemplate.js';
import setActiveScreen from '../setActiveScreen.js';
import calculateAspectRatioFit from '../utils/resizeImage.js';
import header from '../blocks/header.js';
import stats from './stats.js';
import game2 from './game2.js';
import levelStats from '../blocks/levelStats.js';
import * as data from '../data/data.js';

const initialStateData = data.initialState;
const levelsData = data.levels;
const statsData = data.stats;

const answersContent = `
  ${levelsData[`3`].answers.map((answer, i) =>
    `<div class="game__option">
      <img src="${answer}" alt="Option ${i + 1}">
    </div>`).join(``)
  }
`;

export default function templateGame3() {
  const node = getElementFromTemplate(`
    ${header(initialStateData)}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content game__content--triple">
        ${answersContent}
      </form>
      <div class="stats">
        <ul class="stats">
          ${levelStats(statsData)}
        </ul>
      </div>
    </div>
  `);

  const gameOptions = node.querySelectorAll(`.game__option`);
  const backButton = node.querySelector(`.header__back`);
  const images = node.querySelectorAll(`.game__option > img`);

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener(`load`, (event) =>{
      calculateAspectRatioFit(images[i]);
    });
  }

  backButton.addEventListener(`click`, () => {
    setActiveScreen(game2());
  });

  for (let i = 0; i < gameOptions.length; i++) {
    gameOptions[i].addEventListener(`click`, () => {
      setActiveScreen(stats());
    });
  }

  return node;
}
