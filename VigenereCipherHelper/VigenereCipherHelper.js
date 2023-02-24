function VigenèreCipher(key, abc) {
  this.alphabet = abc;
  this.key = key;
  this.abc = abc;

  this.encode = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        result += this.encodeCharacter(str[i], this.key[i]);
      } else {
        result += str[i];
      }
    }
    return result;
  };

  this.decode = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        result += this.decodeCharacter(str[i], this.key[i]);
      } else {
        result += str[i];
      }
    }
    return result;
  };
  this.decodeCharacter = function (abcChar, keyChar) {
    let result = '';
    let position = this.getPosition(abcChar) - this.getPosition(keyChar);
    if (position >= 0) {
      result = this.alphabet[position % this.alphabet.length];
    } else {
      result =
        this.alphabet[(position + this.alphabet.length) % this.alphabet.length];
    }
    return result;
  };

  this.encodeCharacter = function (abcChar, keyChar) {
    return this.alphabet[
      (this.getPosition(abcChar) + this.getPosition(keyChar)) %
        this.alphabet.length
    ];
  };

  this.fillKey = function () {
    let j = 0;
    for (let i = this.key.length - 1; i < this.abc.length - 1; i++) {
      if (j == this.key.length - 1) {
        j = 0;
      }
      this.key += this.key.charAt(j);
      j++;
    }
  };
  this.fillKey();
  this.getPosition = function (character) {
    var alph = this.alphabet.split('');
    let i = 0;
    let found = false;
    while (!found) {
      if (character == alph[i]) {
        found = true;
      } else {
        i++;
      }
    }
    return i;
  };
}

module.exports = VigenèreCipher;