import ChooseTypeForEach from './chooseTypeForEach.js';
import ChooseTypeForOne from './chooseTypeForOne.js';
import FindType from './findType.js';
import {setScreen} from '../../utils/utils.js';
import App from '../../app.js';
import {initialState, settings, questions} from '../../data/data.js';

export default class Game {
  constructor() {
    this._questions = questions;
    this._number = initialState.currentQuestion;
    this._state = Object.assign({}, initialState);
  }

  init() {
    this.changeLevel(this._questions, this._number);
  }

  changeLevel(levelsQuestions, number) {
    let currentQuestion = this._state.currentQuestion;

    switch (levelsQuestions[number].type) {
      case `chooseTypeForEach`:
        this.view = new ChooseTypeForEach(levelsQuestions[number]);
        break;
      case `chooseTypeForOne`:
        this.view = new ChooseTypeForOne(levelsQuestions[number]);
        break;
      case `findType`:
        this.view = new FindType(levelsQuestions[number]);
        break;
      default:
        throw new Error(`Nothing to return. There is no more games.`);
    }

    this.view.onBackButtonClick = () => {
      App.showGreeting();
    };

    this.view.onChangeScreen = () => {
      if (number < settings.screens - 1) {
        currentQuestion = number + 1;
        this.changeLevel(levelsQuestions, currentQuestion);
      } else {
        App.showStats();
      }
    };

    return setScreen(this.view.element);
  }
}
