import App from '../../app.js';
import {renderScreen} from '../../utils/utils.js';
import GreetingView from './greetingView';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    this.view.onNextButtonClick = () => App.showRules();

    renderScreen(this.view);
  }
}

export default GreetingScreen;
