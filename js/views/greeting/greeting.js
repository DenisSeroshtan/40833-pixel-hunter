import {setScreen} from '../../utils/utils.js';
import GreetingView from './greetingView';
import rulesScreen from '../rules/rules.js';

export default () => {
  const greetingScreen = new GreetingView();
  greetingScreen.onNextButtonClick = () => {
    setScreen(rulesScreen());
  };
  return greetingScreen.element;
};
