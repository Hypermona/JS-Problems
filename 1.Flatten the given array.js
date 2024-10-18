//Q flatten a given array
// [1,2,[[3,4,[4,5,[5]]],[7,9,[10]]]]

// with 2 functions
function flatten(arr) {
  let res = [];
  function flat(ele) {
    if (!Array.isArray(ele)) {
      res.push(ele);
    } else {
      for (let a of ele) {
        flat(a);
      }
    }
  }
  flat(arr);
  return res;
}

function flatten2(arr) {
  let res = [];
  if (!Array.isArray(arr)) {
    return arr;
  } else {
    for (let i of arr) {
      res = res.concat(flatten2(i));
    }
  }
  return res;
}

console.log(
  flatten2([
    1,
    2,
    [
      [3, 4, [4, 5, [5]]],
      [7, 9, [10]],
    ],
  ])
);
