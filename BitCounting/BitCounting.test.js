const countBits = require('./BitCounting.js');
// const target = `should return the number of bits that are equal to one in the binary representation of that number.`;

const target = (input, answer) => `countBits(${input}) should equal ${answer}`;

describe('countBits Test', () => {
  it(target(0,0), () => {
    expect(countBits(0)).toEqual(0);
  });
  it(target(4,1), () => {
    expect(countBits(4)).toEqual(1);
  });
  it(target(7,3), () => {
    expect(countBits(7)).toEqual(3);
  });
  it(target(9,2), () => {
    expect(countBits(9)).toEqual(2);
  });
  it(target(10,2), () => {
    expect(countBits(10)).toEqual(2);
  });
  it(target(1897354914,15), () => {
    expect(countBits(1897354914)).toEqual(15);
  });
});
