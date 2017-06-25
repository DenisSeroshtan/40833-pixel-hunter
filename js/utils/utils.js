export function setLivesCount(state, isAnswerCorrect) {
  if (state.lives < 0) {
    throw new RangeError(`Can't set negatives lives`);
  }
  if (isAnswerCorrect) {
    return state;
  } else {
    const newState = Object.assign({}, state);
    const newLivesCount = state.lives - 1;
    newState.lives = newLivesCount;
    return newState;
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
  let points;
  if (answerType === `correct`) {
    points = +100;
  }
  if (answerType === `fast`) {
    points = +50;
  }
  if (answerType === `slow`) {
    points = -50;
  }
  const leftLives = state.lives;
  return points + leftLives * 50;
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
