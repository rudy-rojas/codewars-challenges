const findPrimesSextuplet = require('./PrimeSextuplets.js');

const target = (input, result) =>
  `findPrimesSextuplet(${input}) should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(findPrimesSextuplet(input)).toEqual(result);
  });
};
describe('PrimesSextuplet Test', () => {
  testing(70, [7, 11, 13, 17, 19, 23]);
  testing(600, [97, 101, 103, 107, 109, 113]);
  testing(2016061, [1091257, 1091261, 1091263, 1091267, 1091269, 1091273]);
  testing(26821545, [6005887, 6005891, 6005893, 6005897, 6005899, 6005903]);
  testing(18574751, [3243337, 3243341, 3243343, 3243347, 3243349, 3243353]);
});
