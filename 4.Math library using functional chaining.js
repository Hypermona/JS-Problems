function Math() {
  this.sum = 0;
  this.add = (v) => {
    this.sum += v;
    return this;
  };
  this.subtract = (v) => {
    this.sum -= v;
    return this;
  };
  this.mutiply = (v) => {
    this.sum *= v;
    return this;
  };
  this.divide = (v) => {
    this.sum /= v;
    return this;
  };
  this.print = () => {
    console.log(this.sum);
  };
}

const math = new Math();

math.add(10).subtract(5).mutiply(5).divide(2).print();
