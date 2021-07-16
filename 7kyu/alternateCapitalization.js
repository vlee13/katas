// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//https://www.codewars.com/kata/59cfc000aeb2844d16000075

//Solution 1 with loop on string
function capitalize(s) {
  let odd = "";
  let even = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      odd += s[i].toUpperCase();
      even += s[i];
    }
  }
  return [even, odd];
}

//Solution 2 with arrays and .map
function capitalize(s) {
  let odd = [];
  let even = [];
  let newArr = s.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
      even.push(newArr[i].toUpperCase());
      odd.push(newArr[i]);
    } else {
      odd.push(newArr[i].toUpperCase());
      even.push(newArr[i]);
    }
  }
  return [even.join(""), odd.join("")];
}

//Solution 3 refactored above solution
const capitalize = (s) => [
  [...s].map((ele, i) => (!(i % 2) ? ele.toUpperCase() : ele)),
  s.split("").map((ele, i) => (i % 2 ? ele.toUpperCase() : ele)),
];

//Solution 4
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
