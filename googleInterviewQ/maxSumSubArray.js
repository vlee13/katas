//Given array of Integers
//Return maximum possible sum from on its SUBARRAYS (CONTIGUOUS SEQUENCE)
//No nested loops (if possible)

//Solution
function findMaxSum(arr) {
  let maxSum = (currentSum = 0);
  for (let i of arr) {
    currentSum = Math.max(i + currentSum, i);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

//Test cases:
// [0,1,-1] --> 1
// [-2,2,5,-11,6] --> 7
// [8,-1,-3,1,0,5] --> 10
// [5,-13,70,-12,5,13] --> 76
