// create a deepClone function;

// imp: if you use ... (spread operator to copy it will become shallow copy it will not clone netsted objects or array)

function deepClone(obj) {
  let res = undefined;
  if (typeof obj === "object") {
    res = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
      res[i] = deepClone(obj[i]);
    }
    return res;
  } else {
    return obj;
  }
}
const original = [
  { name: "abc", age: 23, address: { pin: "111111", state: "zzzz" }, hobbies: ["a", "b"] },
];
const cloned = deepClone(original);

cloned[0].name = "bvc";
cloned[0].address.pin = "2222222";
cloned[0].hobbies[1] = "z";
console.log(original, cloned);
