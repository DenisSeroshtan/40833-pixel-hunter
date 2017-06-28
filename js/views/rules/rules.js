import App from '../../app.js';
import {setScreen} from '../../utils/utils.js';
import RulesView from './rulesView.js';

export default class Rules {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    this.view.onBackButtonClick = () => App.showGreeting();

    this.view.onSubmitForm = () => App.showGame();

    setScreen(this.view.element);
  }
}
