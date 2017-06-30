import App from '../../app.js';
import StatsView from './statsView.js';
import StatsModel from '../../models/statsModel';

class StatsScreen {
  constructor(data) {
    this.data = data;
  }
  init(state) {
    this.state = state;

    StatsModel.load()
      .then((data) => {
        this.view = new StatsView(state, data);
        this.view.show();
        this.view.onBackButtonClick = () => App.showGreeting();
      });
  }
}

export default StatsScreen;
