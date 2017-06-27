import ChooseTypeForEach from './games/chooseTypeForEach.js';
import ChooseTypeForOne from './games/chooseTypeForOne.js';
import FindType from './games/findType.js';
import {setScreen} from '../utils/utils.js';
import greetingScreen from './greeting/greeting.js';
import statsScreen from './stats/stats.js';
import {initialState, settings} from '../data/data.js';

export default function changeLevel(questions, number) {
  let currentQuestion = initialState.currentQuestion;
  let currentGame;

  switch (questions[number].type) {
    case `chooseTypeForEach`:
      currentGame = new ChooseTypeForEach(questions[number]);
      break;
    case `chooseTypeForOne`:
      currentGame = new ChooseTypeForOne(questions[number]);
      break;
    case `findType`:
      currentGame = new FindType(questions[number]);
      break;
    default:
      throw new Error(`Nothing to return. There is no more games.`);
  }

  currentGame.onBackButtonClick = () => {
    setScreen(greetingScreen());
  };

  currentGame.onChangeScreen = () => {
    if (number < settings.screens - 1) {
      currentQuestion = number + 1;
      setScreen(changeLevel(questions, currentQuestion));
    } else {
      setScreen(statsScreen());
    }
  };

  return currentGame.element;
}
