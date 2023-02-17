const score = require('./GreedIsGood.js');

const target = (input, result) => `[${input}] should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(score(input, result));
  });
};
describe(`Calculating score Test`, () => {
  testing([2, 3, 4, 6, 2], 0);
  testing([4, 4, 4, 3, 3], 400);
  testing([2, 4, 4, 5, 4], 450);
  testing([1, 5, 1, 3, 4], 250);
});
