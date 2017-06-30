import App from '../../app.js';
import {renderScreen} from '../../utils/utils.js';
import StatsView from './statsView.js';

class StatsScreen {

  init(state) {
    this.view = new StatsView(state);
    this.view.onBackButtonClick = () => App.showGreeting();

    renderScreen(this.view);
  }
}

export default StatsScreen;
