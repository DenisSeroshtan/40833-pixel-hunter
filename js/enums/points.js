import AnswerTypes from './answerTypes';

export default {
  [AnswerTypes.correct]: 100,
  [AnswerTypes.fast]: 50,
  [AnswerTypes.slow]: -50,
  [AnswerTypes.wrong]: 0
};
