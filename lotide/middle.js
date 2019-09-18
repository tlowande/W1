let eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


// Assertion Function
let assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅✅✅Assertion Passed');
  } else {
    console.log('🛑🛑🛑Assertion Failed');
  }
};


let middle = function(array) {
  // let midNum = [];
  if(array.length === 1 || array.length === 2){
    return [];
  }else if(array.length % 2 !== 0){
    const midIndex = Math.floor(array.length / 2);
    // midNum.push(array[midIndex]);
    return [array[midIndex]];
  }else if(array.length % 2 === 0){
    const midIndex = (array.length / 2) - 1
    // midNum.push(array[midIndex]);
    // midNum.push(array[midIndex +1]);
    return [array[midIndex], array[midIndex +1]]
  }
  // return midNum;
};

console.log(middle([2, 6, 6, 8, 8]));