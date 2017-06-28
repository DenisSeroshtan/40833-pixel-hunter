import App from '../../app.js';
import {setScreen} from '../../utils/utils.js';
import IntroView from './introView.js';

export default class IntroPresenter {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.onNextButtonClick = () => App.showGreeting();

    setScreen(this.view.element);
  }
}
