// In this Kata, you will be given directions and your task will be to find your way back.

//example: solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
//example: solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

// https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript

//Solution 1
function solve(arr) {
  let backwardsArray = [];
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
    backwardsArray.push(splitElem.join(" "));
  }
  return backwardsArray;
}

//Solution 2
function solve(arr) {
  let newArr = arr.map((el) => el.split(" "));
  let dir = [];
  let instructions = newArr.map((el) => {
    dir.unshift(el.shift());
    return el;
  });
  dir = dir.map((el) =>
    el === "Right" ? "Left" : el === "Left" ? "Right" : "Begin"
  );
  dir.unshift(dir.pop());
  return instructions.reverse().map((el, ind) => {
    el.unshift(dir[ind]);
    return el.join(" ");
  });
}

//Solution 3
function solve(arr) {
  console.log(arr.reverse());
  return arr.reverse().map((element, index, arr) => {
    console.log(arr[index - 1]);
    if (index === 0) return element.replace(/Left|Right/, "Begin");
    else if (arr[index - 1].includes("Right"))
      return element.replace(/Left|Right|Begin/, "Left");
    else return element.replace(/Left|Right|Begin/, "Right");
  });
}
