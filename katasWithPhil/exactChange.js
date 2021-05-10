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
  e;
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

//refactored with map
function makeChange(num) {
  let coins = [25, 10, 5, 1];
  let result = [];
  let money = num;
  coins.map((ele) => {
    let multiples = parseInt(money / ele);
    for (let i = 0; i < multiples; i++) {
      result.push(ele);
    }
    money = money % ele;
  });

  return result;
}

//Solution 2 with while loop
const sorryeh = [200, 100, 25, 10, 5, 1];
const freedombucks = [25, 10, 5, 1];

function exactChange(money, coins = freedombucks) {
  let change = [];
  for (let i = 0; i < coins.length; i++) {
    while (money >= coins[i]) {
      change.push(coins[i]);
      money -= coins[i];
    }
  }
  return change;
}
