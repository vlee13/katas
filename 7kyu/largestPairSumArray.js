// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//https://www.codewars.com/kata/556196a6091a7e7f58000018

// Solution 1 using for loop
function largestPairSum(numbers) {
  let largestNumber = -100;
  let secondLargest = -101;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = numbers[i];
    } else if (numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }
  let sum = largestNumber + secondLargest;
  return sum;
}

//Solution 2 using Math.max()
function largestPairSum(numbers) {
  let max = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max), 1);
  let secMax = Math.max(...numbers);
  return max + secMax;
}

// Solution 2 using sort method
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}
