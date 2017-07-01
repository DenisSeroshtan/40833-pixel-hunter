import AbstractView from '../abstractView.js';
import header from '../../blocks/header.js';


export default class StatsView extends AbstractView {
  constructor(state, data) {
    super();
    this.state = state;
    this.data = data;
  }
  get template() {
    return `
      ${header()}
        <div class="result">
          <h1>${this.state.lives > 0 ? `Победа! 🎉` : `Поражение 😔`}</h1>
          
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
            </tr>
          </table>
          
          ${this.data.map((item, index) => {
            return `
              <table class="result__table">
                <tr>
                  <td class="result__number">${index + 2}.</td>
                  <td colspan="2">
                    <ul class="stats">
                      some stats goes here
                    </ul>
                  </td>
                </tr>
              </table>
            `;
          })}
          
        </div>
    `;
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
