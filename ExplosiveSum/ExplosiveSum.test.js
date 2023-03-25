const sum = require('./ExplosiveSum');
const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(sum(input)).toEqual(result);
  });
};

describe(`Explosive Sum Test`, () => {
  testing(6, 11);
  testing(11, 56);
  testing(80, 15796476);
  testing(100, 190569292);
  testing(200, 3972999029388);
});
