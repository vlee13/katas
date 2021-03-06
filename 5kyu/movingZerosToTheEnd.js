// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//https://www.codewars.com/kata/52597aa56021e91c93000cb0

//Solution 1
const moveZeros = function (arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr2.concat(arr1);
};

//Solution 2
const moveZeros = (arr) => {
  //loop has to be backwards bc of splice takes out element and rest of elements shift to the left
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};

//Solution 3
var moveZeros = function (arr) {
  let newArr = arr.filter((ele) => ele !== 0);
  let zeroArr = arr.filter((ele) => ele === 0);
  return newArr.concat(zeroArr);
};

//Solution 3 refactored to 1 line
const moveZeros = (arr) =>
  arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
