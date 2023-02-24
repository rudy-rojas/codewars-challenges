const solution = require('./RangeExtraction.js');

const target = (input, result) => `[${input}] should be "${result}"`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(solution(input)).toEqual(result);
  });
};
describe(`RangeExtraction Test`, () => {
  testing(
    [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20],
    '-6,-3-1,3-5,7-11,14,15,17-20'
  );
  testing(
    [
      -62, -59, -57, -56, -54, -51, -49, -48, -47, -44, -43, -41, -39, -36, -33,
      -30,
    ],
    '-62,-59,-57,-56,-54,-51,-49--47,-44,-43,-41,-39,-36,-33,-30'
  );
  testing(
    [
      -71, -69, -67, -64, -61, -60, -57, -56, -54, -52, -49, -46, -44, -41, -40,
      -39, -36, -35, -33, -31, -30, -29, -27, -26, -24, -21,
    ],
    '-71,-69,-67,-64,-61,-60,-57,-56,-54,-52,-49,-46,-44,-41--39,-36,-35,-33,-31--29,-27,-26,-24,-21'
  );
  testing([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20], '-3--1,2,10,15,16,18-20');
  testing(
    [
      -93, -92, -89, -86, -83, -80, -78, -75, -74, -73, -70, -67, -64, -63, -60,
      -59, -56, -54, -53, -52, -49, -48,
    ],
    '-93,-92,-89,-86,-83,-80,-78,-75--73,-70,-67,-64,-63,-60,-59,-56,-54--52,-49,-48'
  );
});