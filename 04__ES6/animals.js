export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = "loud noise") {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }
}

export class Cat extends Animal {
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}
