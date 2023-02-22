const getRange = (array) => `${array[0]}-${array[array.length - 1]}`;
const getSerie = (array) =>
  array.reduce((acc, el) => `${acc}${acc == '' ? '' : `,`}${el}`, '');

const solution = (list) => {
  let answer = '';
  let tempArray = [];
  for (let i = 0; i < list.length; i++) {
    tempArray.push(list[i]);
    if (i < list.length && list[i] + 1 == list[i + 1]) {
    } else if (tempArray.length >= 3) {
      answer += getRange(tempArray);
      tempArray.length = 0;
      if (i <= list.length - 2) {
        answer += ',';
      }
    } else {
      answer += getSerie(tempArray);
      tempArray.length = 0;
      if (i <= list.length - 2) {
        answer += ',';
      }
    }
  }

  return answer;
};

module.exports = solution;