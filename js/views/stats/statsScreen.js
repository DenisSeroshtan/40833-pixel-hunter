import App from '../../app.js';
import {renderScreen} from '../../utils/utils.js';
import StatsView from './statsView.js';

class StatsScreen {
  constructor(stats) {
    this.stats = stats;
  }

  init() {
    this.view = new StatsView(this.stats);
    this.view.onBackButtonClick = () => App.showGreeting();

    renderScreen(this.view);
  }
}

export default StatsScreen;
