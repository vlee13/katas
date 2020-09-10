// In this Kata, you will be given directions and your task will be to find your way back.

//example: solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
//example: solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

//Solution 1
function solve(arr) {
  if (arr.length === 0) return [];
  let backwardsArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let splitDirection = arr[i].split(" ");
    let direction = "";
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
    splitDirection.splice(0, 1, direction);
    backwardsArray.push(splitDirection.join(" "));
  }
  return backwardsArray;
}

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
