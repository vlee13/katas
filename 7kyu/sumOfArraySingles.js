// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

// More examples in the test cases.

// Good luck!

//https://www.codewars.com/kata/59f11118a5e129e591000134

//Solution
function repeats(arr) {
  let result = [];
  let arr2 = arr.sort((a, b) => a - b);
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] === arr2[i + 1] ? (i = i + 1) : result.push(arr2[i]);
  }

  console.log(result);
  return result[0] + result[1];
}
