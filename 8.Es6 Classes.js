class Animal {
  leg = 2;
  constructor(name) {
    this.name = name;
    this.play = this.play.bind(this);
  }
  static whatAmI() {
    console.log("animal", this);
  }

  play() {
    console.log("playing", this);
  }
  walk = () => {
    console.log("walking", this);
  };
}

Animal.prototype.sing = () => {
  console.log("sing", this);
};
Animal.prototype.cry = function () {
  console.log("crying", this);
};

Animal.whatAmI();
const animal = new Animal("manga");
animal.cry();
animal.leg;
animal.play();
animal.sing();
animal.walk();
