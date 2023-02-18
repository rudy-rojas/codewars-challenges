const rot13 = require('./Rot13.js');
const target = (input, result) => `${input} should be ${result}`;

const testing = (input, result) => {
  it(target(input, result), () => {
    expect(rot13(input)).toEqual(result);
  });
};

describe(`Cypher Rot13 Test`, () => {
  testing('test', 'grfg');
  testing("$_O`Q'C%x97A[", "$_B`D'P%k97N[");
  testing('0]uW', '0]hJ');
  testing('K#$i~5^^NN6btf]$', 'X#$v~5^^AA6ogs]$');
  testing('I4HWxH-qv:"V^6R(', 'V4UJkU-di:"I^6E(');
});
