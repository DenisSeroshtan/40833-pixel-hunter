import getElementFromTemplate from '../getElementFromTemplate.js';
import setActiveScreen from '../setActiveScreen.js';
import header from '../blocks/header.js';
import rules from './rules.js';
import game2 from './game2.js';
import levelStats from '../blocks/levelStats.js';
import {initialState as initialStateData} from '../data/data.js';
import {levels as levelsData} from '../data/data.js';
import {stats as statsData} from '../data/data.js';

const answersContent = `
  ${levelsData[initialStateData.level].answers.map((answer, i) =>
    `<div class="game__option">
      <img src="${answer}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question${i}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${i}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
      </div>`).join(``)
    }
`;

export default function game1() {
  const node = getElementFromTemplate(`
    ${header(initialStateData)}
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
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
    setActiveScreen(rules());
  });

  form.addEventListener(`change`, () => {
    const checkedAnswers = document.querySelectorAll(`input[type=radio]:checked`);
    if (checkedAnswers.length === 2) {
      setActiveScreen(game2());
    }
  });

  return node;
}
