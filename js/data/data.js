export const initialState = Object.freeze({
  lives: 2,
  time: 0,
  level: `1`
});

export const levels = Object.freeze({
  '1': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      `https://k42.kn3.net/CF42609C8.jpg`,
      `http://i.imgur.com/1KegWPz.jpg`
    ]
  },
  '2': {
    question: `Угадай, фото или рисунок?`,
    answers: [
      `https://k32.kn3.net/5C7060EC5.jpg`
    ]
  },
  '3': {
    question: `Найдите рисунок среди изображений`,
    answers: [
      `http://i.imgur.com/DKR1HtB.jpg`,
      `http://i.imgur.com/1KegWPz.jpg`,
      `https://i.imgur.com/DiHM5Zb.jpg`
    ]
  }
});

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
