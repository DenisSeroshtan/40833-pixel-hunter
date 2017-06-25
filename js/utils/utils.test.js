import assert from 'assert';
import {checkAnswers, setLivesCount, calcLivesPoints, calcAnswersPoints, generateGameStat} from './utils.js';

const state = {
  time: 30,
  lives: 3,
  totalRounds: 10,
  currentRound: 0,
  gameStat: []
};

describe(`Change game state`, () => {
  describe(`Check answers`, () => {
    it(`Should return true if received answers are correct`, () => {
      const roundState = {
        answers: [
          {
            type: `paint`
          },
          {
            type: `photo`
          }
        ]
      };
      const userAnswer = {
        answer: [`paint`, `photo`]
      };
      assert.equal(checkAnswers(roundState, userAnswer), true);
    });
    it(`Should return false if two received answers are not correct`, () => {
      const roundState = {
        answers: [
          {
            type: `paint`
          },
          {
            type: `photo`
          }
        ]
      };
      const userAnswer = {
        answer: [`photo`, `paint`]
      };
      assert.equal(checkAnswers(roundState, userAnswer), false);
    });
    it(`Should return false if one of received answer is not correct`, () => {
      const roundState = {
        answers: [
          {
            type: `paint`
          },
          {
            type: `photo`
          }
        ]
      };
      const userAnswer = {
        answer: [`paint`, `paint`]
      };
      assert.equal(checkAnswers(roundState, userAnswer), false);
    });
  });

  describe(`Change lives count`, () => {
    it(`The number of lives decreases by one if an incorrect answer is given`, function () {
      assert.equal(setLivesCount(state, false).lives, state.lives - 1);
    });

    it(`The number of lives doesn't decreases if an correct answer is given`, function () {
      assert.equal(setLivesCount(state, true).lives, state.lives);
    });

    it(`The number of lives shouldn't be negative`, function () {
      const newState = Object.assign({}, state, {lives: -1});
      const setNegativeLives = () => setLivesCount(newState, false).lives;
      assert.throws(setNegativeLives);
    });
  });

  describe(`Every life gives 50 points`, () => {
    it(`Should return 0 If there are no more lives left`, () => {
      const initialState = {
        lives: 0
      };
      assert.equal(calcLivesPoints(initialState), 0);
    });
    it(`Should return 50 for 1 life`, () => {
      const initialState = {
        lives: 1
      };
      assert.equal(calcLivesPoints(initialState), 50);
    });

    it(`Should return 100 for 2 lives`, () => {
      const initialState = {
        lives: 2
      };
      assert.equal(calcLivesPoints(initialState), 100);
    });

    it(`Should return 150 for 3 lives`, () => {
      const initialState = {
        lives: 3
      };
      assert.equal(calcLivesPoints(initialState), 150);
    });
  });

  describe(`Get points which depends on answers type and lives numbers`, () => {
    it(`Should return 200 points if type of answer is 'fast' and 3 lives`, () => {
      const initialState = {
        lives: 3
      };
      assert.equal(calcAnswersPoints(initialState, `fast`), 200);
    });
    it(`Should return -50 points if type of answer is 'slow' and 0 lives`, () => {
      const initialState = {
        lives: 0
      };
      assert.equal(calcAnswersPoints(initialState, `slow`), -50);
    });
  });

  describe(`Set game stats`, () => {
    it(`The correct answer is marked`, function () {
      const newGameState = generateGameStat(state, true, 15).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `correct`);
    });

    it(`The wrong answer is marked or user didn't answer`, function () {
      const newGameState = generateGameStat(state, false, -1).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `wrong`);
    });

    it(`The correct answer is marked and it's fast`, function () {
      const newGameState = generateGameStat(state, true, 9).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `fast`);
    });

    it(`The correct answer is marked and it's slow`, function () {
      const newGameState = generateGameStat(state, true, 21).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `slow`);
    });
  });
});
