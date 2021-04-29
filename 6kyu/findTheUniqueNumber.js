// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript

//Solution 1*
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] != arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}

//Solution 1 better
function findUniq(arr) {
  arr.sort();
  return arr[0] !== arr[1] ? arr[0] : arr.pop();
}

//Solution 2
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      return arr[i];
    }
  }
}

//Solution 3
function findUniq(arr) {
  return Number(
    arr
      .filter((element) => arr.indexOf(element) === arr.lastIndexOf(element))
      .join("")
  );
}
