j = {
  a: "Hi",
  b: "hello",
  print: function () {
    console.log(this.a); // a
  },
  print1: () => {
    console.log(this.b); // undefined
  },
};

j["c"] = function () {
  console.log("obj", this.a); //hi
};
j["d"] = () => {
  console.log("obj", this.b); // undefined
};

j.print();
j.print1();
j.c();
j.d();

function hi() {
  this.a = "Hi";
  this.b = "hello";

  this.print = function () {
    console.log(this.a); // hi
  };
  this.print1 = () => {
    console.log(this.b); // hello
  };
  function x() {
    console.log("inside function ", this.a); // undefined
  }
  const y = () => {
    console.log("inside function ", this.b); // hello
  };
  x();
  y();
}
hi.prototype.ok = () => {
  console.log(this.a); // undefined
};

const h = new hi();

h.print();
h.print1();
h.ok();
