// let a = [45, 5, -5, 100, 78]
// let b = [1, 0, 0, 3]
// let t = 8

// Is there any one element in arr1 that can be combined with one element in arr2 to make the sum of the target?
// Output: Return true or false
// Note: arr1, arr2, and targetValue can be any integer values.
// Note: Try to avoid a nested for loop

//Solution 1 - Ariel
let c = [];

function escapeVelocity(arr1, arr2, targetValue) {
  for (let elem of arr1) {
    c.push(targetValue - elem);
  }
  for (let i of c) {
    if (arr2.includes(i)) {
      return true;
    }
  }
  return false;
}

//Solution 1 consolidated
function escapeVelocity(arr1, arr2, targetValue) {
  for (let i of arr1) {
    if (arr2.includes(targetValue - i)) {
      return true;
    }
  }
  return false;
}

//Solution 2 - Valentino
function escapeVelocity(arr1, arr2, targetValue) {}
