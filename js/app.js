import IntroScreen from './views/intro/intro';
import GreetingScreen from './views/greeting/greeting';
import RulesScreen from './views/rules/rules';
import NewGameScreen from './views/games/game';
import StatsScreen from './views/stats/stats';

export default new class {
  constructor() {
    this._introScreen = new IntroScreen();
    this._greetingScreen = new GreetingScreen();
    this._rulesScreen = new RulesScreen();
    this._newGameScreen = new NewGameScreen();
    this._statsScreen = new StatsScreen();
  }

  init() {
    this._introScreen.init();
  }

  showIntro() {
    this._introScreen.init();
  }

  showGreeting() {
    this._greetingScreen.init();
  }

  showRules() {
    this._rulesScreen.init();
  }

  showGame() {
    this._newGameScreen.init();
  }

  showStats(stats) {
    this._statsScreen.init(stats);
  }
}();
