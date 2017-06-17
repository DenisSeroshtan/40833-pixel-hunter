import getElementFromTemplate from '../getElementFromTemplate.js';
import setActiveScreen from '../setActiveScreen.js';
import header from '../blocks/header.js';
import game1 from './game1.js';
import game3 from './game3.js';
import levelStats from '../blocks/levelStats.js';
import {initialState as initialStateData} from '../data/data.js';
import {levels as levelsData} from '../data/data.js';
import {stats as statsData} from '../data/data.js';

const answersContent = `
  ${levelsData[`2`].answers.map((answer) =>
  `<div class="game__option">
    <img src="${answer}" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
    </div>`).join(``)
  }
`;

export default function templateGame2() {
  const node = getElementFromTemplate(`
    ${header(initialStateData)}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        ${answersContent}
      </form>
      <div class="stats">
        <ul class="stats">
          ${levelStats(statsData)}
        </ul>
      </div>
    </div>
  `);

  const form = node.querySelector(`.game__content`);
  const backButton = node.querySelector(`.header__back`);

  backButton.addEventListener(`click`, () => {
    setActiveScreen(game1());
  });

  form.addEventListener(`change`, () => {
    if (form.querySelector(`[name="question1"]:checked`)) {
      setActiveScreen(game3());
    }
  });

  return node;
}
