import IntroScreen from './views/intro/introScreen';
import GreetingScreen from './views/greeting/greetingScreen';
import RulesScreen from './views/rules/rulesScreen';
import NewGameScreen from './views/games/gameScreen';
import StatsScreen from './views/stats/statsScreen';
import Preloader from './views/preloader/preloader';
import AbstractModel from './models/abstractModel';
import controllerId from './enums/controllerId';


const getControllerIdFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {
    this.model = new class extends AbstractModel {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
      }
    }();
  }

  init() {
    this.showPreloader();
    this.model.load()
      .then((data) => this._setup(data))
      .then((data) => {
        const {controller, state} = this._parseHashFromUrl();
        this.changeController(controller, state, data);
      })
      .catch(window.console.error);
  }

  _parseHashFromUrl() {
    const hash = location.hash.split(`=`);
    const [controller, hashValue] = hash;
    return {
      controller: getControllerIdFromHash(controller),
      state: hashValue ? JSON.parse(atob(hashValue)) : hashValue
    };
  }

  changeController(route = ``, state = ``, data = ``) {
    const Controller = this.routes[route];
    if (Controller) {
      new Controller(data).init(state);
    }
  }

  showPreloader() {
    new Preloader().init();
  }

  showIntro() {
    location.hash = controllerId.INTRO;
  }

  showGreeting() {
    location.hash = controllerId.GREETING;
  }

  showRules() {
    location.hash = controllerId.RULES;
  }

  showGame() {
    location.hash = controllerId.GAME;
  }

  showStats(state) {
    const encodeState = btoa(JSON.stringify(state));
    location.hash = `${controllerId.STATS}=${encodeState}`;
  }

  _setup(data) {
    this.routes = {
      [controllerId.INTRO]: IntroScreen,
      [controllerId.GREETING]: GreetingScreen,
      [controllerId.RULES]: RulesScreen,
      [controllerId.GAME]: NewGameScreen,
      [controllerId.STATS]: StatsScreen
    };

    window.onhashchange = () => {
      const {controller, state} = this._parseHashFromUrl();
      this.changeController(controller, state, data);
    };

    return data;
  }
}

const app = new App();

export default app;
