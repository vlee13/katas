// In this Kata, you will be given directions and your task will be to find your way back.

//example: solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
//example: solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

// https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript

//Solution 1
function solve(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let splitElem = arr[i].split(" ");
    //change and store the new direction
    let direction = "";
    //set conditions to get the correct direction
    if (i === arr.length - 1) {
      direction = "Begin";
    } else {
      switch (arr[i + 1].split(" ")[0]) {
        case "Right":
          direction = "Left";
          break;
        default:
          direction = "Right";
      }
    }
    splitElem.splice(0, 1, direction);
    newArr.push(splitElem.join(" "));
  }
  return backwardsArray;
}

// ['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']

//Solution 2
function solve(arr) {
  console.log(arr.reverse());
  return arr.reverse().map((elem, index, newArr) => {
    if (index === 0) return elem.replace(/Left|Right/, "Begin");
    else if (newArr[index - 1].includes("Right"))
      return elem.replace(/Left|Right|Begin/, "Left");
    else return elem.replace(/Left|Right|Begin/, "Right");
  });
}

//   [ 'Left on 9th Dr', 'Right on First Road', 'Begin on 3rd Blvd' ]
