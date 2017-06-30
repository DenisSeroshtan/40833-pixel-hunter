import App from '../../app.js';
import GreetingView from './greetingView';

class GreetingScreen {
  init() {
    this.view = new GreetingView();
    this.view.show();
    this.view.onNextButtonClick = () => App.showRules();
  }
}

export default GreetingScreen;
