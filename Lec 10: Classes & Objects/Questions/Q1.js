/*
Qs. you are creating a website for yout college. create a class user with 2 properties, name & email.
it also has a method called viewData() that allows user to view website data.

Qs. create a new class called admin which inherits from user. add new method called editData to Admin that allow it to edit website data.
*/

let DATA = "seceret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("website data");
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new value";
  }
}

let student1 = new User("Suraj", "xyz@x.com");
let student2 = new User("Dheeraj", "jkl@j.com");

let teacher1 = new User("Dean", "dean@x.com");

let admin1 = new Admin("admin", "admin@college.com");
