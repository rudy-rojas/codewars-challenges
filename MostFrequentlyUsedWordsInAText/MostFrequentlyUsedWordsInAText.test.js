const topThreeWords = require('./MostFrequentlyUsedWordsInAText.js');

const target = (input, result) => `[${input}] should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(topThreeWords(input)).toEqual(result);
  });
};
describe(`Most frequently used words in a text Test`, () => {
  testing(
    `In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`,
    ['a', 'of', 'on']
  );
  testing('a a a  b  c c  d d d d  e e e e e', ['e', 'd', 'a']);
  testing('a a c b b', ['a', 'b', 'c']);
  testing("  //wont won't won't ", ["won't", 'wont']);
  testing("  '  ", []);
});
