import AbstractView from '../abstractView.js';
import header from '../../blocks/header.js';
import levelStats from '../../blocks/levelStats.js';
import {changeAspectRatioOnLoad} from '../../utils/utils.js';
import {initialState, stats} from '../../data/data.js';

export default class findType extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }
  get template() {
    return `
      ${header(initialState)}
        <div class="game">
          <p class="game__task">${this.question.question}</p>
          <form class="game__content game__content--triple">
            ${this.question.answers.map((answer, i) =>
              `<div class="game__option">
                <img src="${answer.image}" alt="Option ${i + 1}">
              </div>`).join(``)
            }
          </form>
          <div class="stats">
            <ul class="stats">
              ${levelStats(stats)}
            </ul>
          </div>
        </div>
      `.trim();
  }

  bind() {
    const gameOptions = this.element.querySelectorAll(`.game__option`);
    for (const option of gameOptions) {
      option.addEventListener(`click`, () => {
        this.onChangeScreen();
      });
    }

    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    const images = this.element.querySelectorAll(`.game__option > img`);
    changeAspectRatioOnLoad(images);
  }

  onBackButtonClick() {
    throw new Error(`Not implemented onBackButtonClick`);
  }

  onChangeScreen() {
    throw new Error(`Not implemented onChangeScreen`);
  }
}
