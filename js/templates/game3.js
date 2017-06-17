import getElementFromTemplate from '../getElementFromTemplate.js';
import setActiveScreen from '../setActiveScreen.js';
import header from '../blocks/header.js';
import stats from './stats.js';
import game2 from './game2.js';
import levelStats from '../blocks/levelStats.js';
import {initialState as initialStateData} from '../data/data.js';
import {levels as levelsData} from '../data/data.js';
import {stats as statsData} from '../data/data.js';

const answersContent = `
  ${levelsData[`3`].answers.map((answer) =>
    `<div class="game__option">
      <img src="${answer}" alt="Option 1" width="304" height="455">
    </div>`).join(``)
  }
`;

export default function templateGame3() {
  const node = getElementFromTemplate(`
    ${header(initialStateData)}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
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
