//make a function that takes an array of numbers and makes a new array without duplicate numbers

[1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9];

//solution 1 - brute force
const uniq = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {}
};

//solution 2 - optimized version
const uniq = (arr) => {
  let uniqArr = arr.filter((num, i) => i === arr.indexOf(num));
  return uniqArr;
};
