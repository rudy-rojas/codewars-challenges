const cypher = (el) => {
  // A = 65, Z = 90
  // a = 97, z = 122
  let charCodeAt = el.charCodeAt(0);
  let isLowerCase;
  if (charCodeAt >= 97 && charCodeAt <= 122) {
    isLowerCase = true;
  }

  if (charCodeAt >= 65 && charCodeAt <= 90) {
    el = el.toLowerCase();
    charCodeAt = el.charCodeAt(0);
    isLowerCase = false;
  }
  if (isLowerCase != null) {
    if (charCodeAt + 13 > 122) {
      charCodeAt = 122 - charCodeAt;
      charCodeAt = 97 + (13 - charCodeAt) - 1;
    } else if (charCodeAt + 13 >= 97 && charCodeAt + 13 <= 122) {
      charCodeAt += 13;
    }
  }

  let result = String.fromCharCode(charCodeAt);
  return !isLowerCase ? result.toUpperCase() : result;
};

const rot13 = (message) => {
  return message.split('').reduce((acc, el) => `${acc}${cypher(el)}`, ``);
};

console.log(rot13('0]uW'));

module.exports = rot13;
