import App from '../../app.js';
import {setScreen} from '../../utils/utils.js';
import StatsView from './statsView.js';

export default class Stats {
  constructor() {
    this.view = new StatsView();
  }

  init() {
    this.view.onBackButtonClick = () => App.showGreeting();

    setScreen(this.view.element);
  }
}
