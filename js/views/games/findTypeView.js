import AbstractView from '../abstractView.js';
import header from '../../blocks/header.js';
import levelStats from '../../blocks/levelStats.js';
import {changeAspectRatioOnLoad} from '../../utils/utils.js';

export default class findType extends AbstractView {
  constructor(state, question) {
    super();
    this.question = question;

    this.state = state;
  }
  get template() {
    return `
      ${header(this.state)}
        <div class="game">
          <p class="game__task">${this.question.question}</p>
          <form class="game__content game__content--triple">
            ${this.question.answers.map((answer, i) =>
              `<div class="game__option" data-index="${i}">
                <img src="${answer.image.url}" alt="Option ${i + 1}"/>
              </div>`).join(``)
            }
          </form>
          <div class="stats">
            ${levelStats(this.state.stats)}
          </div>
        </div>
      `.trim();
  }

  bind() {
    this.timerNode = this.element.querySelector(`.game__timer`);
    const options = this.element.querySelectorAll(`.game__option`);

    const clickOptionHandler = (evt) => {
      this.onAnswer(this.question.answers[+evt.target.dataset.index].type === `photo`);
    };

    Array.from(options).forEach((item) => {
      item.addEventListener(`click`, clickOptionHandler);
    });

    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick(false);
    });

    const images = this.element.querySelectorAll(`.game__option > img`);
    changeAspectRatioOnLoad(images);
  }

  updateTimer(time) {
    this.timerNode.innerHTML = time;
  }

  onBackButtonClick() {
    throw new Error(`Not implemented`);
  }

  onAnswer() {
    throw new Error(`Not implemented`);
  }
}
