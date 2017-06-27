import {setScreen} from '../../utils/utils.js';
import greetingScreen from '../greeting/greeting.js';
import RulesView from './rules-view.js';
import changeLevel from '../changeLevel.js';
import {questions, initialState} from '../../data/data.js';

export default() => {
  const rulesScreen = new RulesView();
  rulesScreen.onBackButtonClick = () => {
    setScreen(greetingScreen());
  };
  rulesScreen.submitForm = () => {
    setScreen(changeLevel(questions, initialState.currentQuestion));
  };
  return rulesScreen.element;
};
