import AbstractView from '../abstractView.js';
import header from '../../blocks/header.js';
import levelStats from '../../blocks/levelStats.js';
import {changeAspectRatioOnLoad} from '../../utils/utils.js';
import {initialState, stats} from '../../data/data.js';

export default class chooseTypeForEach extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }
  get template() {
    return `
      ${header(initialState)}
      <div class="game">
        <p class="game__task">${this.question.question}</p>
        <form class="game__content">
          ${this.question.answers.map((answer, i) =>
          `<div class="game__option">
            <img src="${answer.image}" alt="Option ${i + 1}">
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
        </form>
        <div class="stats">
          ${levelStats(stats)}
        </div>
      </div>
      `.trim();
  }

  bind() {
    this.form = this.element.querySelector(`.game__content`);
    this.form.addEventListener(`change`, () => {
      const checkedAnswers = this.form.querySelectorAll(`input[type=radio]:checked`);
      if (checkedAnswers.length === 2) {
        this.onChangeScreen();
      }
    });

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
