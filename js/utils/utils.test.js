import assert from 'assert';
import {checkAnswers, setLivesCount, calcLivesPoints, generateGameStat} from './utils.js';

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

    it(`The number of lives becomes negative`, function () {
      const newState = Object.assign({}, state, {lives: 0});
      assert.equal(setLivesCount(newState, false).lives, 0);
    });
  });

  describe(`Calculate points from lives`, () => {
    it(`Should return 0 If there are no more lives left`, () => {
      const initialState = {
        lives: 0
      };
      assert.equal(calcLivesPoints(initialState), 0);
    });
    it(`Should return 50 if 1 life is left`, () => {
      const initialState = {
        lives: 1
      };
      assert.equal(calcLivesPoints(initialState), 50);
    });

    it(`Should return 100 if 2 lives are left`, () => {
      const initialState = {
        lives: 2
      };
      assert.equal(calcLivesPoints(initialState), 100);
    });

    it(`Should return 150 if 3 lives are left`, () => {
      const initialState = {
        lives: 3
      };
      assert.equal(calcLivesPoints(initialState), 150);
    });
  });

  describe(`Set game stats`, () => {
    it(`The correct answer is marked`, function () {
      const newGameState = generateGameStat(state, true, 10).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `correct`);
    });

    it(`The wrong answer is marked`, function () {
      const newGameState = generateGameStat(state, false, 25).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `wrong`);
    });

    it(`The correct answer is marked and it's fast`, function () {
      const newGameState = generateGameStat(state, true, 25).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `fast`);
    });

    it(`The correct answer is marked and it's slow`, function () {
      const newGameState = generateGameStat(state, true, 5).gameStat;
      assert.equal(newGameState[newGameState.length - 1], `slow`);
    });
  });
});
