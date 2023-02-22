const convertToHex = (num) => {
  if (num > 255) {
    num = 255;
  } else if (num < 0) {
    num = 0;
  }
  let hex = num.toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex.toUpperCase();
};

const rgb = (r, g, b) => {
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
};

module.exports = rgb;
