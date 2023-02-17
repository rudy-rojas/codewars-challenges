const narcissistic = (value) => {
  let exp = value.toString().length;
  let calcNumber = value 
    .toString()
    .split('')
    .reduce((acc, el) => acc + parseInt(Math.pow(parseInt(el), exp)), 0);
  return calcNumber == value;
};

module.exports = narcissistic;
