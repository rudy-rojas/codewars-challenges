const RomanNumerals = require('./RomanNumeralsHelper.js');

const target = (input, result) => `${input} should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(RomanNumerals.toRoman(input)).toEqual(result);
    expect(RomanNumerals.fromRoman(result)).toEqual(input);
  });
};
describe(`RomanNumerals Test`, () => {
  testing(3771, 'MMMDCCLXXI');
  testing(269, 'CCLXIX');
  testing(6, 'VI');
  testing(1681, 'MDCLXXXI');
  testing(2008, 'MMVIII');
});
