const solution = require('./SplitStrings.js');

const target = (input, result) => `${input} should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(solution(input)).toEqual(result);
  });
};

describe(`SplitString Test`, () => {
  testing('abc', ['ab', 'c_']);
  testing('fruit', ['fr', 'ui', 't_']);
  testing('', []);
});
