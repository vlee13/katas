//given arr
[1, 2, 3, 3, 3, 4, 5];

//filter to this
[1, 2, 3, 4, 5];

//solution
const uniq = (arr) => {
  let uniqArr = arr.filter((num, i) => i === arr.indexOf(num));
  return uniqArr;
};
