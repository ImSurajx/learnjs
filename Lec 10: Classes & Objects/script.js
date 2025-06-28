const student = {
  fullName: "Suraj Kumar",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
};

karanArjun.__proto__ = employee;

class ToyotaCar {
  constructor(brand) {
    console.log("create new object");
    this.brand = brand;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brand = brand; // the object for the function was called;
  }
}

let fortuner = new ToyotaCar(`fortuner`);

class Parent {
  hello() {
    console.log("Hello");
  }
}

class Child extends Parent {}

let obj = new Child();

class Person {
  constructor() {
    this.species = "Homo Sapiens";
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  wokr() {
    console.log("do-nothing");
  }
}

class Engineer extends Person {
  work() {
    console.log("solve problems, build something");
  }
}

let surajObj = new Engineer();

let objx = new Child();

class Person {
  constructor() {
    this.species = "Homo Sapiens";
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(branch) {
    super(); // to invoke parent class constructor
    this.branch = branch;
  }
  work() {
    console.log("solve problems, build something");
  }
}

let engObj = new Engineer("chemical engineer");
