const duplicateEncode = require('./DuplicateEncoder.js');
const target = (input, result) => `${input} should be ${result}`;

const testing = (input, result) => {
  it(target(input, result), () => {
    expect(duplicateEncode(input)).toEqual(result);
  });
};

describe(`DuplicateEncoder Test`, () => {
  testing('din', '(((');
  testing('recede', '()()()');
  testing('Success', ')())())');
  testing('(( @', '))((');
});
