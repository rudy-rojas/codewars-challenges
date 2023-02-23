const isInteresting = require('./CatchingCarMileageNumbers.js');

const target = (inputNumber, inputArray, result) =>
  `(${inputNumber},[${inputArray}]) should be ${result}`;
const testing = (inputNumber, inputArray, result) => {
  it(target(inputNumber, inputArray, result), () => {
    expect(isInteresting(inputNumber, inputArray)).toEqual(result);
  });
};
describe(`CatchingCarMileageNumbers Test`, () => {
  testing(3, [1337, 256], 0);
  testing(1336, [1337, 256], 1);
  testing(1337, [1337, 256], 2);
  testing(11208, [1337, 256], 0);
  testing(11209, [1337, 256], 1);
  testing(11211, [1337, 256], 2);
  testing(98, [1337, 256], 1);
  testing(109, [], 1);
});
