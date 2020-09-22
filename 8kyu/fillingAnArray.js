// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

//solution 1 with for loop
const arr = (N) => {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push(i);
  }
  return result;
};

//solution 2 with array.from
//note: look at tests for including _
const arr = (n) => Array.from({ length: n }, (_, i) => i);

//solution 3 with array.keys
//note: spread operator for making new array
const arr = (N) => [...Array(N || 0).keys()];
