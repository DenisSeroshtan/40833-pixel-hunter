import App from '../../app.js';
import {renderScreen} from '../../utils/utils.js';
import RulesView from './rulesView.js';

class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    this.view.onBackButtonClick = () => App.showGreeting();

    this.view.onSubmitForm = () => App.showGame();

    renderScreen(this.view);
  }
}

export default new RulesScreen();
