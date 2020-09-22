// Given a string, like “hi my name is Phil”, return “ih ym eman si lihP“
//Common interview question

//Solution 1
function reverseEach(str) {
  let arr = str.split(" ");
  console.log(arr);
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr +=
      i === arr.length - 1
        ? `${arr[i].split("").reverse().join("")}`
        : `${arr[i].split("").reverse().join("")} `;
  }
  return newStr;
}

//Solution 2
function reverseEach(str) {
  let newStr = str.split(" ");
  let result = [];
  for (let i = 0; i < newStr.length; i++) {
    result.push(newStr[i].split("").reverse().join(""));
  }
  return result.join(" ");
}
