const cleanText = (text) => {
  text = text.toLowerCase();
  let result = '';
  for (let character of text) {
    if (/[a-z\s']/.test(character)) {
      result += character;
    }
  }
  return result;
};

const convertObjToArray = (obj) => Object.entries(obj);

const topThreeWords = (text) => {
  text = cleanText(text);
  let objText = text.split(' ').reduce((acc, el) => {
    if (/[a-z]/.test(el)) {
      if (el in acc) {
        acc[el] += 1;
      } else {
        acc[el] = 1;
      }
    }
    return acc;
  }, {});

  return convertObjToArray(objText)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((el) => el[0]);
};

module.exports = topThreeWords;
