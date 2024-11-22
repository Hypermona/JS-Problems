//20. Create a Polyfill for function.call(), function.apply(), and function.bind()

function myApply(thisArg, args = []) {
  thisArg.fun = this;
  thisArg.fun(...args);
}
function myBind(thisArg) {
  thisArg.fun = this;
  return function (...arg) {
    thisArg.fun(...arg);
  };
}
function myCall(thisArg, ...args) {
  thisArg.fun = this;
  thisArg.fun(...args);
}

Function.prototype.myApply = myApply;
Function.prototype.myBind = myBind;
Function.prototype.myCall = myCall;

const obj = {
  a: "a",
  b: "b",
};

function say() {
  console.log(this.a, this.b);
}

say.myCall(obj);
say.myApply(obj);
say.myBind(obj)();
