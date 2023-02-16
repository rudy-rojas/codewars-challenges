const toCamelCase = (str) => {
  let upperCase = false;
  return str.split('').reduce((acc, el) => {
    if (el != '-' && el != '_') {
      if (acc === '') {
        acc = el;
      } else {
        if (upperCase) {
          acc += el.toUpperCase();
          upperCase = false;
        } else {
          acc += el;
        }
      }
    } else {
      upperCase = true;
    }
    return acc;
  }, '');
};

module.exports = toCamelCase;
