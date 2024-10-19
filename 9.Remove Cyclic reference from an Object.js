//Q: Remove cyclic reference

const obj1 = {
  name: "xyz",
  age: 12,
};
const obj2 = {
  name: "abc",
  age: 21,
};

obj1.spouse = obj2;
obj2.spouse = obj1;

// console.log(JSON.stringify(obj1)); // will throw error

function breakCycle(obj) {
  //1.store visited objects
  //2.if arg is visited then just return
  //3.if arg is not an object then just return the arg
  //4. loop the arg and call self
  let set = new Set();

  function cycle(obj) {
    if (set.has(obj)) {
      return;
    }
    if (!(typeof obj === "object")) {
      return obj;
    }
    let res = {};
    set.add(obj);
    for (let i in obj) {
      const value = cycle(obj[i]);
      if (value) {
        res[i] = value;
      }
    }
    return res;
  }
  return cycle(obj);
}

const z = breakCycle(obj1);
console.log(z);
