import IntroScreen from './views/intro/introScreen';
import GreetingScreen from './views/greeting/greetingScreen';
import RulesScreen from './views/rules/rulesScreen';
import NewGameScreen from './views/games/gameScreen';
import StatsScreen from './views/stats/statsScreen';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stat`,
};

const getControllerIdFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {
    this.routes = {
      [ControllerId.INTRO]: IntroScreen,
      [ControllerId.GREETING]: GreetingScreen,
      [ControllerId.RULES]: RulesScreen,
      [ControllerId.GAME]: NewGameScreen,
      [ControllerId.STATS]: StatsScreen
    };

    window.onhashchange = () => {
      const {controller, state} = this._parseHashFromUrl();
      this.changeController(controller, state);
    };
  }
  init() {
    const {controller, state} = this._parseHashFromUrl();
    console.log({controller, state})
    this.changeController(controller, state);
  }

  _parseHashFromUrl() {
    const hash = location.hash.split(`=`);
    const [controller, hashValue] = hash;
    return {
      controller: getControllerIdFromHash(controller),
      state: hashValue ? JSON.parse(atob(hashValue)) : hashValue
    };
  }

  changeController(route = ``, state = ``) {
    const Controller = this.routes[route];
    if (Controller) {
      new Controller(state).init();
    }
  }

  showIntro() {
    location.hash = ControllerId.INTRO;
  }

  showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  showRules() {
    location.hash = ControllerId.RULES;
  }

  showGame() {
    location.hash = ControllerId.GAME;
  }

  showStats(state) {
    const encodeState = btoa(JSON.stringify(state));
    location.hash = `${ControllerId.STATS}=${encodeState}`;
  }
}

const app = new App();
app.init();

export default app;
