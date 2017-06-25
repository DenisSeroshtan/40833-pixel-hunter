export function setLivesCount(state, answer) {
  if (answer) {
    return {lives: state.lives};
  } else {
    const newLivesCount = state.lives - 1;
    return {lives: Math.max(newLivesCount, 0)};
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
  let questionsPoints = 0;
  for (let i = state.lives; i > 0; i--) {
    questionsPoints += 50;
  }
  return questionsPoints;
}

export function generateGameStat(state, answer, time) {
  const newGameStats = state.gameStat.slice();
  let answerParams;

  if (answer) {
    const timePassed = state.time - time;

    if (timePassed < 10) {
      answerParams = `fast`;
    } else if (timePassed > 20) {
      answerParams = `slow`;
    } else {
      answerParams = `correct`;
    }
  } else {
    answerParams = `wrong`;
  }

  newGameStats.push(answerParams);

  return {gameStat: newGameStats};
}
