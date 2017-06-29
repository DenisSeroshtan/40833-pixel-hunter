import ChooseTypeForEach from './chooseTypeForEachView.js';
import ChooseTypeForOne from './chooseTypeForOneView.js';
import FindType from './findTypeView.js';
import App from '../../app.js';
import {questions} from '../../data/data.js';

const QuestionType = {
  chooseTypeForEach: `chooseTypeForEach`,
  chooseTypeForOne: `chooseTypeForOne`,
  findType: `findType`
};

export const initialState = () => Object.freeze({
  lives: 3,
  question: 0,
  time: 30,
  stats: []
});

export const ResultType = Object.freeze({
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
});

export const MAX_QUESTIONS = 3;
const MAX_LIVES = 3;
export const TIME_FOR_QUESTION = 30;
export const QUICK_ANSWER_TIME = 10;
export const LATE_ANSWER_TIME = 20;


export const setLives = (state, lives) => {
  if (typeof state !== `object` || typeof lives !== `number` || typeof state.lives !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }

  if (isNaN(lives) || lives < 0 || lives > 10) {
    throw new RangeError(`Lives must be between 0...${MAX_LIVES}.`);
  }

  const newState = Object.assign({}, state, {lives});

  return newState;
};

class GameScreen {
  constructor() {
    this.questions = questions;
    this.gameList = {
      [QuestionType.chooseTypeForEach]: ChooseTypeForEach,
      [QuestionType.chooseTypeForOne]: ChooseTypeForOne,
      [QuestionType.findType]: FindType
    };
  }

  init() {
    this.state = initialState();
    this.view = this.createView(initialState(), this.getQuestion());
    this.view.show();
  }

  createView(state) {
    const view = new this.gameList[this.getQuestion().type](state, this.getQuestion());
    view.onAnswer = (isCorrectAnswer) => {
      this.checkAnswer(isCorrectAnswer);
    };

    view.onBack = () => App.showGreeting();

    return view;
  }

  checkAnswer(isCorrectAnswer) {
    if (!isCorrectAnswer) {
      this.state = setLives(this.state, this.state.lives - 1);
    }

    this.state.stats.push(this.getResult(isCorrectAnswer));
    this.state.question++;
    this.changeScreen(this.state);
  }

  changeScreen(state) {
    if (state.question < MAX_QUESTIONS && state.lives > 0) {
      this.state = Object.assign({}, this.state, {time: initialState().time});

      this.view = this.createView(this.state);
      this.view.show();

    } else {
      App.showStats(this.state.stats);
    }
  }

  getQuestion() {
    return this.questions[this.state.question];
  }

  getResult(isCorrectAnswer) {
    let str;

    if (!isCorrectAnswer) {
      str = ResultType.WRONG;
    } else if (TIME_FOR_QUESTION - this.state.time < QUICK_ANSWER_TIME) {
      str = ResultType.FAST;
    } else if (TIME_FOR_QUESTION - this.state.time > LATE_ANSWER_TIME) {
      str = ResultType.SLOW;
    } else {
      str = ResultType.CORRECT;
    }

    return str;
  }
}

export default GameScreen;
