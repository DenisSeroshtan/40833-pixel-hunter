import {setScreen} from '../../utils/utils.js';
import greetingScreen from '../greeting/greeting.js';
import StatsView from './statsView.js';

export default () => {
  const statsScreen = new StatsView();
  statsScreen.onBackButtonClick = () => {
    setScreen(greetingScreen());
  };
  return statsScreen.element;
};
