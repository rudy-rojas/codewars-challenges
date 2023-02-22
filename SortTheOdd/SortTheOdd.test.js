const sortArray = require('./SortTheOdd.js');

const target = (input, result) => `[${input}] should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(sortArray(input)).toEqual(result);
  });
};
describe(`SortTheOdd Test`, () => {
  testing([5, 3, 2, 8, 1, 4], [1, 3, 2, 8, 5, 4]);
  testing([5, 3, 1, 8, 0], [1, 3, 5, 8, 0]);
  testing([], []);
  testing([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
  testing(
    [19, 80, 27, 6, 15, 42, 33, 26, 121, 10],
    [15, 80, 19, 6, 27, 42, 33, 26, 121, 10]
  );
});
