import GameOneView from './games/game-one-view.js';
import GameTwoView from './games/game-two-view.js';
import GameThreeView from './games/game-three-view.js';
import {setScreen} from '../utils/utils.js';
import greetingScreen from './greeting/greeting.js';
import statsScreen from './stats/stats.js';
import {initialState, settings} from '../data/data.js';

export default function changeLevel(questions, number) {
  let currentQuestion = initialState.currentQuestion;
  let currentGame;

  switch (questions[number].type) {
    case `gameOne`:
      currentGame = new GameOneView(questions[number]);
      break;
    case `gameTwo`:
      currentGame = new GameTwoView(questions[number]);
      break;
    case `gameThree`:
      currentGame = new GameThreeView(questions[number]);
      break;
    default:
      throw new Error(`Nothing to return. There is no more games.`);
  }

  currentGame.onBackButtonClick = () => {
    setScreen(greetingScreen());
  };

  currentGame.onChangeScreen = () => {
    if (number < settings.screens - 1) {
      currentQuestion = ++number;
      setScreen(changeLevel(questions, currentQuestion));
    } else {
      setScreen(statsScreen());
    }
  };

  return currentGame.element;
}
