'use strict';

// //128. Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 + numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// //129. Passing Arguments work. Value vs Reference
// const flight = 'LH123';
// const jonas = {
//   name: 'Jonas Schmidt',
//   passport: 32132432324,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 32132432324) {
//     alert('Check In');
//   } else {
//     alert('Wrong Passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //is the same doing
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() + 32132132423213);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// //130. First class and higher order functions
// //131. Accepting Callback Function

// //Caller function
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// //Caller function
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// //Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('✊');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam', 'Tom'].forEach(high5);

// //132. Function returns function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hi')('Martha');

// const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
// greet2('Hello')('Vova');

// //133. call and apply methods
// const lufthansa = {
//   airlline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airlline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Vova Chubenko');
// lufthansa.book(434, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airlline: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
// };

// const book = lufthansa.book;

// //Does not work
// //book(23, 'Sarah Williams')

// //Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 774, 'Bob Carol');
// console.log(lufthansa);

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData); //old!!!
// console.log(eurowings);
// //better to use spread method instead of 'apply' method
// book.call(eurowings, ...flightData);
// console.log(eurowings);

// // 134. Bind method
// const boofEW = book.bind(eurowings);
// const boofLH = book.bind(lufthansa);
// boofEW(23, 'Steve Williams');

// const boofEW23 = book.bind(eurowings, 23);
// boofEW23('Jonas Schmidt');
// boofEW23('Martha Cooper');

// //With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //to avoid pointing 'this' to document element instead of lufthansa object

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value => value + value * 0.23
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addVAT2 = rate => value => value + value * rate;
// console.log(addVAT2(0.23)(100));

// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // if (typeof answer === 'number' && answer < this.answers.length) {
//     //   this.answers[answer]++;
//     //   console.log(`Your '${answer}' answer was accepted`);
//     // } else {
//     //   console.log(
//     //     `Answer '${answer}' is out of scope or not a number. Please choose another or correct option.`
//     //   );
//     // }
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const array1 = [5, 2, 3];
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// // 136. Immediately Invoke Function Expression
// (function () {
//   console.log('This will never run agai');
//   const isPrivate = 23;
// })();

// (() => console.log('This will never run agai 2'))();

// {
//   const isPrivate = 24;
//   var notPrivate = 46;
// }
// console.log(notPrivate);

// // 137. Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// // console.dir(booker); // to see the closure also
// //Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a + 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// //re-assighning f function

// h();
// f();
// console.dir(f);
// //Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// 139. Coding Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
