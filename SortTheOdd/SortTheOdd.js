const sortArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      for (let j = i; j < array.length; j++) {
        if (array[j] % 2 != 0) {
          if (array[j] < array[i]) {
            const copyI = array[i];
            array[i] = array[j];
            array[j] = copyI;
          }
        }
      }
    }
  }
  return array;
};

module.exports = sortArray;
