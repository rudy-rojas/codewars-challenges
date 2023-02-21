const solution = (str) => {
  let result = [];
  str = str.split('');
  if (str.length % 2 != 0) {
    str.push('_');
  }
  for (let i = 0; i < str.length / 2; i++) {
    result.push(`${str[2 * i]}${str[2 * i + 1]}`);
  }
  return result;
};

module.exports = solution;