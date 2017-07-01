import App from '../../app.js';
import RulesView from './rulesView.js';

class RulesScreen {
  init() {
    this.view = new RulesView();
    this.view.show();
    this.view.onBackButtonClick = () => App.showGreeting();

    this.view.onSubmitForm = () => {
      App.showGame();
    };
  }
}

export default RulesScreen;
