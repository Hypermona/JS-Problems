function flattenObject(obj) {
  // Implementation goes here.
  function flatten(obj) {
    const res = {};
    for (let o in obj) {
      if (typeof obj[o] === "object" && obj[o] && !Array.isArray(obj[o])) {
        let op = flatten(obj[o]);
        for (let i in op) {
          delete res[i];
          res[`${o}.${i}`] = op[i];
        }
      } else {
        res[o] = obj[o];
      }
    }
    return res;
  }
  return flatten(obj);
}

const ip = {
  id: "123",
  //   name: {
  //     first: "John",
  //     last: "Doe",
  //     ok: {
  //       sorry: "hi",
  //     },
  //   },
  age: "49",
};
console.log(ip);
console.log(flattenObject(ip));
