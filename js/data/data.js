import Points from '../enums/points';
import AnswerTypes from '../enums/answerTypes';

export const getInitialState = () => Object.freeze({
  lives: 3,
  time: 30,
  question: 0,
  stats: []
});

export const statsInfo = Object.freeze({
  'title': {
    'win': `Победа!`,
    'loss': `Поражение`
  },
  'ratio': Points[AnswerTypes.correct],
  'bonuses': [
    {
      'title': `Бонус за скорость:`,
      'type': `fast`,
      'ratio': Points[AnswerTypes.fast]
    },
    {
      'title': `Бонус за жизни:`,
      'type': `heart`,
      'ratio': Points.heart
    },
    {
      'title': `Штраф за медлительность:`,
      'type': `slow`,
      'ratio': Points[AnswerTypes.slow]
    }
  ]
});
