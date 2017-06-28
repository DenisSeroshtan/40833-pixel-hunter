import App from '../../app.js';
import {setScreen} from '../../utils/utils.js';
import GreetingView from './greetingView';

export default class GreetingPresenter {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    this.view.onNextButtonClick = () => App.showRules();

    setScreen(this.view.element);
  }
}
