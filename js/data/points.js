import ResultType from '../enums/resultType';
import Points from '../enums/points';

export const getPointsByAnswerType = (type, stats) => {
  const countStatType = stats.filter((stat) => stat === type).length;

  return countStatType * Points[type];
};

export const getPointByLives = (lives) => {
  return lives * Points.heart;
};

export const getRightPoints = (stats) => {
  return stats.filter((stat) => stat !== ResultType.WRONG).length * Points[ResultType.CORRECT];
};

export const getTotalPoints = ({lives, stats}) => {
  const sumFastAnswerPoints = getPointsByAnswerType(ResultType.FAST, stats);
  const sumSlowAnswerPoints = getPointsByAnswerType(ResultType.SLOW, stats);
  const sumLivesPoints = getPointByLives(lives);
  const sumRightPoints = getRightPoints(stats);

  return sumFastAnswerPoints + sumSlowAnswerPoints + sumLivesPoints + sumRightPoints;
};

export const getPointCount = (stats, type) => stats.filter((s) => {
  return s === type;
}).length;
