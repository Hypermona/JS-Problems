/**
 * Q: Create a function the returns helper function to add numbers
 *    input: add(10); add(10,20,30,40); add(10,50);
 *    output: 170
 */

function calculator() {
  let sum = 0;
  return function (...a) {
    // for (let i of a) {
    //   sum += i;
    // }
    sum = a.reduce((prev, curr) => prev + curr, sum);
    return sum;
  };
}

const add = calculator();
console.log(add(10));
console.log(add(10, 20, 30, 40));
console.log(add(10, 50));
