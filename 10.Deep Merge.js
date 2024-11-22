const obj1 = {
  project: "real-world",
  version: 1.0,
  outputDir: "/output",
  dev: {
    port: 4000,
    domain: "localhost",
  },
  pluggins: [
    {
      name: "add numbers",
    },
  ],
};
const obj2 = {
  project: "real-world",
  version: 1.2,
  outputDir: "db/output",
  dev: {
    port: 5000,
    domain: "google",
    cloud: {
      name: "aws",
    },
  },
  mode: "production",
};

function deepMerge(baseObj, overrideObj) {
  //1.loop both the objects compare.
  //2.if they are not same, then check the type of base object and override object
  //3.if both are object then again call self.
  //4.if property of override object not present in base then add it.
  //5.if property of base object not present in override then just continue.

  let res = {};
  for (let i in baseObj) {
    if (baseObj[i] !== overrideObj[i]) {
      if (typeof baseObj[i] === "object" && typeof overrideObj[i] === "object") {
        res[i] = deepMerge(baseObj[i], overrideObj[i]);
      } else if (overrideObj[i]) {
        res[i] = overrideObj[i];
      } else {
        res[i] = baseObj[i];
      }
    } else {
      res[i] = baseObj[i];
    }
  }
  for (let i in overrideObj) {
    if (!baseObj[i]) {
      res[i] = overrideObj[i];
    }
  }
  return res;
}
const res = deepMerge(obj1, obj2);
console.log(res);

function deepMerge2(baseObj, overrideObj) {
  //1.check type of base object and create initial result data from base object.
  //2. start looping over override object
  //3.if property only present in overide object then, add to result
  //4.if property of base is not object then, assign value from override object
  //5.if property of base object present but not equal to in override then again call self.

  let res = Array.isArray(baseObj) ? [...baseObj] : { ...baseObj };
  for (let i in overrideObj) {
    if (!baseObj[i]) {
      res[i] = overrideObj[i];
    } else if (typeof baseObj[i] === "object" && typeof overrideObj[i] === "object") {
      res[i] = deepMerge2(baseObj[i], overrideObj[i]);
    } else {
      res[i] = overrideObj[i];
    }
  }

  return res;
}
console.log(deepMerge2(obj1, obj2));
