import App from '../../app.js';
import StatsView from './statsView.js';
import StatsModel from '../../models/statsModel';

class StatsScreen {
  init(state) {
    StatsModel.send()
      .then(() => {
        this.view = new StatsView(state);
        this.view.show();
        this.view.onBackButtonClick = () => App.showGreeting();
      });
  }
}

export default StatsScreen;
