const decompose = require('./SquareIntoSquares');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(decompose(input)).toEqual(result);
  });
};

describe(`Square into squares test`, () => {
  testing(50, [1, 3, 5, 8, 49]);
  testing(12, [1, 2, 3, 7, 9]);
  testing(44, [2, 3, 5, 7, 43]);
  testing(625, [2, 5, 8, 34, 624]);
  testing(5, [3, 4]);
  testing(3, null)
});
