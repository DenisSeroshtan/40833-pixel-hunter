export function setLivesCount(state, isAnswerCorrect) {
  if (state.lives < 0) {
    throw new RangeError(`Can't set negatives lives`);
  }
  if (isAnswerCorrect) {
    return state;
  } else {
    return Object.assign({}, state, {lives: state.lives - 1});
  }
}

export function checkAnswers(state, answer) {
  for (let i = 0; i < state.answers.length; i++) {
    if (answer.answer[i] !== state.answers[i].type) {
      return false;
    }
  }
  return true;
}

export function calcLivesPoints(state) {
  return state.lives * 50;
}

export function calcAnswersPoints(state, answerType) {
  const points = () => {
    switch (answerType) {
      case `correct`:
        return +100;
      case `fast`:
        return +50;
      case `slow`:
        return -50;
      default:
        throw new Error(`Nothing to return. Answer type is ${answerType}`);
    }
  };

  return points() + calcLivesPoints(state);
}

export function generateGameStat(state, isAnswerCorrect, time) {
  const newGameStats = state.gameStat.slice();
  const answerParams = () => {
    if (isAnswerCorrect) {
      if (time < 10) {
        return `fast`;
      }
      if (time > 20 && time <= 30) {
        return `slow`;
      }
      if (time >= 10 && time <= 20) {
        return `correct`;
      }
      if (time === -1) {
        return `wrong`;
      }
    }
    return `wrong`;
  };

  newGameStats.push(answerParams());

  return {gameStat: newGameStats};
}

export function createElement(string) {
  const template = document.createElement(`div`);
  template.innerHTML = string;
  return template;
}

export function renderScreen(view) {
  const mainScreen = document.getElementById(`main`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(view.element);
}

export function calculateAspectRatioFit(img) {
  const parentWidth = img.parentNode.clientWidth;
  const parentHeight = img.parentNode.clientHeight;

  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  if (imgWidth / imgHeight > parentWidth / parentHeight) {
    img.width = parentWidth;
  } else {
    img.height = parentHeight;
  }
}

export function changeAspectRatioOnLoad(images) {
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener(`load`, (event) =>{
      calculateAspectRatioFit(images[i]);
    });
  }
}
