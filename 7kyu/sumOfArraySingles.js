// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

// More examples in the test cases.

// Good luck!

//https://www.codewars.com/kata/59f11118a5e129e591000134

//Solution 1 with sort(), for loop
function repeats(arr) {
  let result = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i + 1] ? i++ : (result += arr[i]);
  }
  return result;
}

//Solution 2 with sort(), for loop
function repeats(arr) {
  let sum = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      sum += arr[i];
      i--;
    }
  }

  return sum;
}

//Solution 3 with filter(),reduce(),indexOf(),lastIndexOf()
//The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
function repeats(arr) {
  let result = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result[0] + result[1];
}

//Shortened...
function repeats(arr) {
  return arr
    .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0);
}

//Phil's Solution
function repeats(arr) {
  let sum = 0;

  const numMap = arr.reduce((acc, val) => {
    if (acc[val]) {
      acc[val]++;
      return acc;
    }
    acc[val] = 1;
    return acc;
  }, {});

  console.log("num maps", numMap);

  for (const [key, val] of Object.entries(numMap)) {
    if (val < 2) sum += parseInt(key);
  }

  return sum;
}
