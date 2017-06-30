import App from '../../app.js';
import RulesView from './rulesView.js';
import StatisticModel from '../../models/statsModel';

class RulesScreen {
  init() {
    this.view = new RulesView();
    this.view.show();
    this.view.onBackButtonClick = () => App.showGreeting();

    this.view.onSubmitForm = (userName) => {
      StatisticModel.name = userName;
      App.showGame();
    };
  }
}

export default RulesScreen;
