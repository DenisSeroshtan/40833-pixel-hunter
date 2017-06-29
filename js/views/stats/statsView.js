import AbstractView from '../abstractView.js';
import header from '../../blocks/header.js';

export default class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return `
      ${header()}
        <div class="result">
          <h1>${this.state.lives > 0 ? `Победа!` : `Поражение 😔`}</h1>
          <table class="result__table">
            <tr>
              <td class="result__number">1.</td>
              <td colspan="2">
                <ul class="stats">
                  ${this.state.stats.map((stat) => {
                    return `<li class="stats__result stats__result--${stat}"></li>`;
                  }).join(``)}
                </ul>
              </td>
              <td class="result__points">×&nbsp;100</td>
              <td class="result__total">900</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">50</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">100</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">-100</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">950</td>
            </tr>
          </table>
        </div>
    `.trim();
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
  }

  onBackButtonClick() {

  }
}
