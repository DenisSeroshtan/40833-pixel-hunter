import ChooseTypeForEach from './chooseTypeForEachView.js';
import ChooseTypeForOne from './chooseTypeForOneView.js';
import FindType from './findTypeView.js';
import App from '../../app.js';
import {getInitialState} from '../../data/data.js';
import settings from '../../settings';
import questionType from '../../enums/questionType';
import resultType from '../../enums/resultType';

const setTime = (state, time) => {
  if (isNaN(time) || time < 0 || time > settings.TIME_FOR_QUESTION) {
    throw new RangeError(`Incorrect time. Time should be between 0 – ${settings.TIME_FOR_QUESTION}.`);
  }

  const newState = Object.assign({}, state, {time});

  return newState;
};

const setLives = (state, lives) => {
  if (typeof state !== `object` || typeof lives !== `number` || typeof state.lives !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }

  if (isNaN(lives) || lives < 0 || lives > 10) {
    throw new RangeError(`Lives must be between 0...${settings.MAX_LIVES}.`);
  }

  const newState = Object.assign({}, state, {lives});

  return newState;
};

export default class GameScreen {
  constructor(data) {
    this.questions = data;
    this.gameList = {
      [questionType.TWO_OF_TWO]: ChooseTypeForEach,
      [questionType.TINDER_LIKE]: ChooseTypeForOne,
      [questionType.ONE_OF_THREE]: FindType
    };
  }

  init() {
    this.state = getInitialState();
    this.view = this.createView(getInitialState(), this.getQuestion());
    this.view.show();
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.state = setTime(this.state, this.state.time - 1);
      this.view.updateTimer(this.state.time);

      if (this.state.time <= 0) {
        this.stopTimer();

        this.checkAnswer(false);
      }

    }, 1000);
  }

  stopTimer() {
    if (!this.timer) {
      return;
    }

    clearInterval(this.timer);
  }

  createView(state) {
    const view = new this.gameList[this.getQuestion().type](state, this.getQuestion());

    view.onAnswer = (isCorrectAnswer) => {
      this.stopTimer();
      this.checkAnswer(isCorrectAnswer);
    };

    view.onBackButtonClick = () => {
      this.stopTimer();
      App.showGreeting();
    };

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
    if (state.question < settings.MAX_QUESTIONS && state.lives > 0) {
      this.state = Object.assign({}, this.state, {time: getInitialState().time});

      this.view = this.createView(this.state);
      this.view.show();
      this.startTimer();

    } else {
      App.showStats(this.state);
    }
  }

  getQuestion() {
    return this.questions[this.state.question];
  }

  getResult(isCorrectAnswer) {
    let str;

    if (!isCorrectAnswer) {
      str = resultType.WRONG;
    } else if (settings.TIME_FOR_QUESTION - this.state.time < settings.QUICK_ANSWER_TIME) {
      str = resultType.FAST;
    } else if (settings.TIME_FOR_QUESTION - this.state.time > settings.LATE_ANSWER_TIME) {
      str = resultType.SLOW;
    } else {
      str = resultType.CORRECT;
    }

    return str;
  }
}
