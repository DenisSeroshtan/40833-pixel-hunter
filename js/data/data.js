export const initialState = Object.freeze({
  lives: 3,
  time: 0,
  currentQuestion: 0,
  answers: []
});

export const settings = {
  maxLives: 3,
  screens: 3,
  time: 30
};

export const questions = [
  {
    type: `chooseTypeForEach`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: `https://k42.kn3.net/CF42609C8.jpg`,
        type: `paint`
      },
      {
        image: `http://i.imgur.com/1KegWPz.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `chooseTypeForOne`,
    question: `Угадай, фото или рисунок`,
    answers: [
      {
        image: `https://k42.kn3.net/CF42609C8.jpg`,
        type: `paint`
      }
    ]
  },
  {
    type: `findType`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `paint`
      },
      {
        image: `http://i.imgur.com/1KegWPz.jpg`,
        type: `photo`
      },
      {
        image: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `paint`
      }
    ]
  }
];

export const stats = new Map([
  [1, `wrong`],
  [2, `fast`],
  [3, `slow`],
  [4, `fast`],
  [5, `wrong`],
  [6, `unknown`],
  [7, `slow`],
  [8, `wrong`],
  [9, `fast`],
  [10, `slow`]
]);

export const finalStats = [
  [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`],
  [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `wrong`, `fast`, `wrong`],
  [`wrong`, `fast`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `wrong`, `slow`, `slow`],
  [`correct`, `fast`, `correct`, `correct`, `fast`, `correct`, `correct`, `slow`, `correct`, `correct`],
];
