import AbstractView from '../view.js';
import header from '../../blocks/header.js';
import levelStats from '../../blocks/levelStats.js';
import {changeAspectRatioOnLoad} from '../../utils/utils.js';
import {initialState, stats} from '../../data/data.js';

export default class GameTwoView extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }
  get template() {
    return `
      ${header(initialState)}
        <div class="game">
          <p class="game__task">${this.question.question}</p>
          <form class="game__content game__content--wide">
            ${this.question.answers.map((answer, i) =>
              `<div class="game__option">
                <img src="${answer.image}" alt="Option ${i + 1}">
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
    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });

    const answerInputs = this.element.querySelectorAll(`.game__answer input`);
    for (const answer of answerInputs) {
      answer.addEventListener(`change`, () => {
        this.onChangeScreen();
      });
    }

    const images = this.element.querySelectorAll(`.game__option > img`);
    changeAspectRatioOnLoad(images);
  }

  onBackButtonClick() {}

  onChangeScreen() {}
}
