import IntroScreen from './views/intro/introScreen';
import GreetingScreen from './views/greeting/greetingScreen';
import RulesScreen from './views/rules/rulesScreen';
import NewGameScreen from './views/games/gameScreen';
import StatsScreen from './views/stats/statsScreen';

export default class App {

  init() {
    IntroScreen.init();
  }

  showIntro() {
    IntroScreen.init();
  }

  static showGreeting() {
    GreetingScreen.init();
  }

  static showRules() {
    RulesScreen.init();
  }

  static showGame() {
    NewGameScreen.init();
  }

  static showStats(stats) {
    StatsScreen.init(stats);
  }
}
