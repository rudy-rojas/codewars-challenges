const duplicateEncode = (word) => {
  let answer = '';
  let copyWord = word.split('');
  for (let letter of word) {
    if (
      copyWord.reduce(
        (acc, el) =>
          el.toLowerCase() === letter.toLowerCase() ? acc + 1 : acc,
        0
      ) > 1
    ) {
      answer += ')';
    } else {
      answer += '(';
    }
  }

  return answer;
};

module.exports = duplicateEncode;