// Given a string, like “hi my name is Phil”, return “ih ym eman si lihP “
//Common interview question

//Solution
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
