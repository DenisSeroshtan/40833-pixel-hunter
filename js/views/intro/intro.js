import showGreeting from '../greeting/greeting.js';
import {setScreen} from '../../utils/utils.js';
import IntroView from './introView.js';

export default () => {
  const intro = new IntroView();

  intro.onNextButtonClick = () => {
    setScreen(showGreeting());
  };

  return intro.element;
};
