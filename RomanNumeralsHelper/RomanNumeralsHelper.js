class RomanNumerals {
  ONE = '';
  FIVE = '';
  TEN = '';
  static toRoman = (num) => {
    let result = '';
    let position = 0;
    while (num > 0) {
      result = this.buildingCharacters(num % 10, position) + result;
      num = parseInt(num / 10);
      position++;
    }
    return result;
  };

  static buildingCharacters = (num, position) => {
    let result = '';
    if (num > 0) {
      if (position == 0) {
        this.ONE = 'I';
        this.FIVE = 'V';
        this.TEN = 'X';
      } else if (position == 1) {
        //position => 0 = units, 1=tens, 2=hundres, 3 units of thousands
        this.ONE = 'X';
        this.FIVE = 'L';
        this.TEN = 'C';
      } else if (position == 2) {
        this.ONE = 'C';
        this.FIVE = 'D';
        this.TEN = 'M';
      } else if (position == 3 && num <= 3) {
        this.ONE = 'M';
        this.FIVE = '';
      } else if (position == 3 && num > 3) {
        this.ONE = 'I';
        this.FIVE = 'V';
        this.TEN = 'X';
      }
      if ((num >= 1) & (num <= 3)) {
        while (num >= 1) {
          result += this.ONE;
          num--;
        }
      } else if (num == 4) {
        result = `${this.ONE}${this.FIVE}`;
      } else if (num <= 8) {
        result = `${this.FIVE}`;
        while (num >= 6) {
          result += `${this.ONE}`; // this.ONE ?
          num--;
        }
      } else if (num == 9) {
        result = `${this.ONE}${this.TEN}`;
      }
    }

    return result;
  };

  static fromRoman = (str) => {
    let result = '';
    let position = 0;
    while (str.length != 0) {
      let buildingNumber = this.buildingNumber(str, position);
      result = buildingNumber[0] + result;
      str = buildingNumber[1];
      position++;
    }
    return parseInt(result);
  };

  static buildingNumber = (str, position) => {
    let result = 0;
    let finish = false;
    let i = str.length - 1;

    if (position == 0) {
      this.ONE = 'I';
      this.FIVE = 'V';
      this.TEN = 'X';
    } else if (position == 1) {
      this.ONE = 'X';
      this.FIVE = 'L';
      this.TEN = 'C';
    } else if (position == 2) {
      this.ONE = 'C';
      this.FIVE = 'D';
      this.TEN = 'M';
    } else if (position == 3) {
      this.ONE = 'M';
    }

    while (!finish) {
      if (str.charAt(i) == this.ONE) {
        result++;
        str = str.substring(0, i);
      } else if (str.charAt(i) == this.FIVE) {
        if (str.charAt(i - 1) == this.ONE) {
          result += 4;
          str = str.substring(0, i - 1);
          i--;
        } else {
          result += 5;
          str = str.substring(0, i);
        }
      } else if (str.charAt(i) == this.TEN) {
        if (str.charAt(i - 1) == this.ONE) {
          result += 9;
          str = str.substring(0, i - 1);
          i--;
        }
      } else {
        finish = true;
      }
      i--;
    }

    return [result, str];
  };
}

module.exports = RomanNumerals;
