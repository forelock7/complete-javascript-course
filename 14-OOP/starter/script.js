'use strict';

// 206. What is OOP?
// 207. OOP in JavaScript
// JS OOP uses prototypes - prototypes contains method (behavior) that are accessible to all objects linked to the prototype;
// Behavior is delegated to the linked prototype object
// Object can access methods in prototype (prototypal inheritance / deligation)
// How to create new objects:
// 1. Constructor function
// 2. ES6 Classes (more morden) - also use constructor function
// 3. Object.create() - the easiest and most straightforward way of lin

// // 208. Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   console.log(this); // returns empty object
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this. Use prototypes!!!
//   //   this.calcAge = function() {
//   //     console.log(2023 - this.birthYear);
//   //   }
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// // 1. New empty object('{}') created
// // 2. function(constructor) is called, this will point to object {}
// // 3. {} lincked to prototype -- creates __proto__ property
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // 209. Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__); // prototype property of the construction
// console.log(jonas.__proto__ === Person.prototype); // true, but are not the same

// console.log(Person.prototype.isPrototypeOf(jonas)); // true

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

// // 210. Prototypal Inheritance and The Prototype Chain
// // 211. Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__); // Person.prototype
// console.log(jonas.__proto__.__proto__); // Object.prototype
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.log(Person.prototype.constructor); // constructor of Person

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.__proto__.__proto__); // Object.prototype

// // Not a good idea, but we can extend Array's methods
// Array.prototype.unique = function () {
//   return [...new Set(this)]; // Spread Set to array
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1'); // then you can check h1 object in browser console typing next: "console.dir(h1)"
// console.dir(x => x + 1); // function itself is object

// // 212. Coding Challenge #1
// // 1.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(
//     `'${this.make}' car has been accelerated to '${this.speed}' km/h`
//   );
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `'${this.make}' car has been slowed down to '${this.speed}' km/h`
//   );
// };

// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();

// const mercedes = new Car('Mercedes', 95);
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.accelerate();

// // 213. ES6 Classes

// // class expresion
// const PersonCl1 = class {};

// // class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greed = function () {
//   console.log(`Hey ${this.firstName}!!!`);
// };
// jessica.greed();

// // 1. Classes are NOT hoisted (can't use them before declaration)
// // 2. Classes are first-class citizes (classes is special function)
// // 3. Classes are executed in strict mode

// // 214. Setters and Getters
// const account = {
//   owner: 'Jonas',
//   movenets: [200, 530, 120, 300],

//   get latest() {
//     return this.movenets.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movenets.push(mov);
//   },
// };

// console.log(account.latest); // use as a property

// account.latest = 50; // as a property also
// console.log(account.movenets);

// class PersonCl2 {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   get age() {
//     return 2013 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' '))
//       this._fullName = name; // convention/ can't be the same
//     else alert(`${name} is not full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica2 = new PersonCl2('Jessica Davis', 1996);
// console.log(jessica2);
// jessica2.calcAge();

// // 215. Static Methods
// class PersonStatic {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   static hey2() {
//     console.log('Hey there 2 👋');
//     console.log(this);
//   }
// }

// PersonStatic.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// PersonStatic.hey();
// PersonStatic.hey2();

// // 216. Object.create
// // Create a object prototype
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   // it's NOT constructor, just function
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.namme = 'Steven';
// steven.birthYear = '2002';
// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto); // true

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// // 217. Coding Challenge #2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `'${this.make}' car has been accelerated to '${this.speed}' km/h`
//     );
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(
//       `'${this.make}' car has been slowed down to '${this.speed}' km/h`
//     );
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// console.log(ford.speedUS);
// ford.brake();
// ford.speedUS = 200;
// ford.accelerate();
// ford.brake();

// // 218. Inheritance Between 'Classes': Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__); // Person with .introduce
// console.log(mike.__proto__.__proto__); // Person with .introduce + .calcAge

// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// console.log(mike instanceof Object); // true

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

// // 219. Coding Challenge #3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(
//     `'${this.make}' car has been accelerated to '${this.speed}' km/h`
//   );
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `'${this.make}' car has been slowed down to '${this.speed}' km/h`
//   );
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Linking prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `'${this.make}' going at '${this.speed}' km/h, with charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.brake();

// // 220. Inheritance Between "Classes": ES6 Classes

// class PersonCl3 {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   get age() {
//     return 2013 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' '))
//       this._fullName = name; // convention/ can't be the same
//     else alert(`${name} is not full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there 2 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl3 {
//   constructor(fullName, birthYear, course) {
//     // should be the very first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   // // If there are no any additional parameters just use super without constructor
//   //   super(fullName, birthYear);

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${2023 - this.birthYear}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Scince');
// martha.introduce();
// martha.calcAge();

// // 221. Inheritance Between 'Classes': Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   // it's NOT constructor, just function
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`Hey. I'm ${this.firstName}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// // 222. Another Class Example
// // 223. Encapsulation: Protected Properties and Methods
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected properties (just convention!!! still accessable)
//     this._pin = pin;
//     // protected properties (just convention!!! still accessable)
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // public interface
//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);

// console.log(acc1);
// console.log(acc1.pin);

// console.log(acc1.getMovements());

// // 224. Encapsulation: Private Class Field and Methods

// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // (there is also the static version)

// class Account {
//   // 1) Public field (instances)
//   locale = navigator.language;

//   // 2) Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   // 4) Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // acc1.#approveLoan(1000);
// console.log(acc1);
// console.log(acc1.pin);
// console.log(acc1.getMovements());
// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// Account.helper();

// // 225. Chaining Methods
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(100).withdraw(40);
// console.log(acc1.getMovements());

// // 227. Coding Challenge #4

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `'${this.make}' car has been accelerated to '${this.speed}' km/h`
//     );

//     return this;
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(
//       `'${this.make}' car has been slowed down to '${this.speed}' km/h`
//     );

//     return this;
//   }
// }

// class EVCl extends Car {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `'${this.make}' going at '${this.speed}' km/h, with charge of ${
//         this.#charge
//       }%`
//     );
//     return this;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
// }

// const rivian = new EVCl('Rivian', 120, 23);
// rivian.chargeBattery(90).accelerate().accelerate().brake().accelerate().brake();
