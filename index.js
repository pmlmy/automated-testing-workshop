class Person {
  constructor(name, age){
  this.name=name;
  this.age=age;
  }

  celebrateBirthday(){
  this.age += 1;
  console.log("Happy Birthday " + this.name + ", you are now " + this.age);
  }
}

const john = new Person("John", 29);
john.celebrateBirthday();