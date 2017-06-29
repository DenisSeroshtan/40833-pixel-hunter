import App from '../../app.js';
import {renderScreen} from '../../utils/utils.js';
import IntroView from './introView.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.onNextButtonClick = () => App.showGreeting();

    renderScreen(this.view);
  }
}

export default IntroScreen;
