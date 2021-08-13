// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

//Solution 1
function roundIt(n) {
  let [left, right] = String(n).split(".");

  if (left.length > right.length) return Math.floor(n);
  if (left.length < right.length) return Math.ceil(n);
  else return Math.round(n);
}

//Solution 2
function roundIt(n) {
  let arr = String(n).split(".");
  if (arr[0].length > arr[1].length) return Math.floor(n);
  if (arr[0].length < arr[1].length) return Math.ceil(n);
  return Math.round(n);
}
