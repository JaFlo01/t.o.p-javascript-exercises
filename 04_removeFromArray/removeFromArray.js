const removeFromArray = function (array, ...value) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (array[i] === value[j]) {
        array.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
