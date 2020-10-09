// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//https://www.codewars.com/kata/514b92a657cdc65150000006

//Solution 1 with for loop
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

//Solution 2 with [...Array(number).keys()], reduce()
function solution(number) {
  if (number < 3) return 0;
  number = [...Array(number).keys()];
  console.log(number);
  return number.reduce((acc, val) => {
    if (val % 3 === 0 || val % 5 === 0) {
      return acc + val;
    } else {
      return acc;
    }
  }, 0);
}

//Solution 3 one line with spread operator, filter(), reduce()
function solution(number) {
  return number < 3
    ? 0
    : [...Array(number).keys()]
        .filter((v) => v % 3 === 0 || v % 5 === 0)
        .reduce((a, b) => a + b, 0);
}
