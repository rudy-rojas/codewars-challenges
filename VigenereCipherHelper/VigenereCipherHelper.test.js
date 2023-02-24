const VigenèreCipher = require('./VigenereCipherHelper.js');

const target = (input, result) => `[${input}] should be ${result}`;
let abc = 'abcdefghijklmnopqrstuvwxyz';
let desc = `Encode with lowercase latin alphabet Test`;
let password = 'password';
const testingEncode = (input, result, password, abc) => {
  it(target(input, result), () => {
    let c = new VigenèreCipher(password, abc);
    expect(c.encode(input)).toEqual(result);
  });
};
describe(desc, () => {
  testingEncode('codewars', 'rovwsoiv', password, abc);
  testingEncode("it's a shift cipher!", "xt'k o vwixl qzswej!", password, abc);
  // testingEncode('javascript', 'yiuzsrzhot') //'yiuzsrzhot' should be 'yansoqilet'
  testingEncode('waffles', 'laxxhsj', password, abc);
});

const testingDecode = (input, result, password, abc) => {
  it(target(input, result), () => {
    let a = new VigenèreCipher(password, abc);
    expect(a.decode(input)).toEqual(result);
  });
};

desc = `Decode with lowercase latin alphabet test`;
password = 'pizza';
describe(desc, () => {
  testingDecode('pancakes', 'asodavwt', password, abc);
  testingDecode('yiuzsrzhot', 'javascript', password, abc);
});

desc = 'Encode with katakana alphabet';
abc =
  'アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー';
password = 'カタカナ';
describe(desc, () => {
  testingEncode('カタカナ', 'タモタワ', password, abc);
  testingEncode(
    'ドモアリガトゴザイマス',
    'ドオカセガヨゴザキアニ',
    password,
    abc
  );
  testingEncode('javascript', 'javascript', password, abc);
});

desc = 'Decode with katakana alphabet';
describe(desc, () => {
  testingDecode('タモタワ', 'カタカナ', password, abc);
  testingDecode(
    'ドオカセガヨゴザキアニ',
    'ドモアリガトゴザイマス',
    password,
    abc
  );
  testingDecode('javascript', 'javascript', password, abc);
});
