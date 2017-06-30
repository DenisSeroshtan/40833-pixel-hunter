import App from '../../app.js';
import IntroView from './introView.js';

class IntroScreen {
  init() {
    this.view = new IntroView();
    this.view.show();
    this.view.onNextButtonClick = () => App.showGreeting();
  }
}

export default IntroScreen;
