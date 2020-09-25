// Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
// for example exactChange(77)
// would return [25, 25, 25, 1, 1]
// so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
// exactChange(12) would return [10, 1, 1]
// 10 cents, 1 penny, 1 penny
// if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

//Solution 1
function makeChange(num) {
  //iterate through the coin values
  let coins = [25, 10, 5, 1];
  let result = [];
  let money = num;
  //loop through coins array
  for (let i = 0; i < coins.length; i++) {
    //how many times does coins[i] divide into the money
    let multiples = parseInt(money / coins[i]);
    for (let j = 0; j < multiples; j++) {
      result.push(coins[i]);
    }
    let remainder = money % coins[i];
    money = remainder;
  }
  return result;
}
