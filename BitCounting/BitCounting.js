const countBits = (n) => {
  return n
    .toString(2)
    .split('')
    .reduce((acc, el) => (el == 1 ? acc + 1 : acc), 0);
};

module.exports = countBits;
