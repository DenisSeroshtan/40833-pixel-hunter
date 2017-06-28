import ChooseTypeForEach from './chooseTypeForEachView.js';
import ChooseTypeForOne from './chooseTypeForOneView.js';
import FindType from './findTypeView.js';
import {renderScreen} from '../../utils/utils.js';
import App from '../../app.js';
import {initialState, settings, questions} from '../../data/data.js';

class GameScreen {
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

    const currentQuestionType = levelsQuestions[number].type;
    const QuestionViewClass = getQuestionViewClass(currentQuestionType);

    this.view = new QuestionViewClass(levelsQuestions[number]);

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

    return renderScreen(this.view);
  }
}

function getQuestionViewClass(questionType) {
  switch (questionType) {
    case `chooseTypeForEach`:
      return ChooseTypeForEach;
    case `chooseTypeForOne`:
      return ChooseTypeForOne;
    case `findType`:
      return FindType;
    default:
      throw new Error(`Unknown question type ${questionType}`);
  }
}

export default new GameScreen();
