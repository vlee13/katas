// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//https://www.codewars.com/kata/59cfc000aeb2844d16000075

//Solution 1
function capitalize(s) {
  let arr = s.split("");
  let a = "";
  let b = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      a += arr[i];
      b += arr[i].toUpperCase();
    } else {
      a += arr[i].toUpperCase();
      b += arr[i];
    }
  }
  return [a, b];
}

//Solution 2
function capitalize(s) {
  const odd = s
    .split("")
    .map((elem, i) => (i % 2 !== 0 ? elem.toUpperCase() : elem))
    .join("");
  const even = s
    .split("")
    .map((elem, i) => (i % 2 === 0 ? elem.toUpperCase() : elem))
    .join("");
  return [even, odd];
}

//Solution 3
function capitalize(s) {
  let arr = s.split("").reduce(
    (acc, val, ind) => {
      ind % 2
        ? ((acc[0] += val), (acc[1] += val.toUpperCase()))
        : ((acc[1] += val), (acc[0] += val.toUpperCase()));
      return acc;
    },
    ["", ""]
  );
  return arr;
}
