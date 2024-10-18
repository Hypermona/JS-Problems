function Math() {
  this.sum = 0;
  this.print = () => {
    console.log(this.sum);
  };
}

Math.prototype.add = function (v) {
  this.sum += v;
  return this;
};
Math.prototype.subtract = function (v) {
  this.sum -= v;
  return this;
};
Math.prototype.multiply = function (v) {
  this.sum *= v;
  return this;
};
Math.prototype.divide = function (v) {
  this.sum /= v;
  return this;
};

const math = new Math();
math.add(10).subtract(5).multiply(5).divide(2).print();
