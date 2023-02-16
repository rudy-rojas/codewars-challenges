const toCamelCase = require('./ConvertStringToCamelCase.js');

const target = (input, result) =>
  `${input != '' ? input : `''`} should equal ${result != '' ? result : `''`}`;

const testing = (input, result) => {
  it(target(input, result), () => {
    expect(toCamelCase(input, result));
  });
};

describe('toCamelCase Test', () => {
  testing('', '');
  testing('the_stealth_warrior', 'theStealthWarrior');
  testing('The-Stealth-Warrior', 'TheStealthWarrior');
  testing('A-B-C', 'ABC');
  testing('a-cat-is-Omoshiroi', 'aCatIsOmoshiroi');
});
