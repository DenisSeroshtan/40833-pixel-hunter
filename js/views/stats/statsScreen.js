import App from '../../app.js';
import {renderScreen} from '../../utils/utils.js';
import StatsView from './statsView.js';

class StatsScreen {
  constructor() {
    this.view = new StatsView();
  }

  init() {
    this.view.onBackButtonClick = () => App.showGreeting();

    renderScreen(this.view);
  }
}

export default new StatsScreen();
