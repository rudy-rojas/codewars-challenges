const rgb = require('./RGBToHexConversion.js');

const target = (input, result) => `[${input}] should be ${result}`;
const testing = (input, result) => {
  it(target(input, result), () => {
    expect(rgb(...input)).toEqual(result);
  });
};
describe(`RGB to Hex Test`, () => {
  testing([255, 255, 255], 'FFFFFF');
  testing([255, 255, 300], 'FFFFFF');
  testing([0, 0, 0], '000000');
  testing([148, 0, 211], '9400D3');
});
