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
    if (answerType === `correct`) {
      return +100;
    } else if (answerType === `fast`) {
      return +50;
    } else {
      return -50;
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
