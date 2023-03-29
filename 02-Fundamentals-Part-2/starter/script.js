// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is Vova');
// }

// //calling/running/invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //function declaration
// function calcAge(birthYear) {
//     return 2023 - birthYear;
// }

// //function expresion
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }

// //arrow function
// const calcAge3 = birthYear => 2023 - birthYear;

// const age = calcAge(1991);
// const age2 = calcAge2(1991);
// const age3 = calcAge3(1991);
// console.log(age, age2, age3);

// const yearUntilRetirement = birthYear => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearUntilRetirement(1986));

// const yearUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}.`;
// }
// console.log(yearUntilRetirement2(1986, 'Bob'));

// function cutFruitPieeces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieeces(apples);
//     const orangePieces = cutFruitPieeces(apples);


//     console.log(applePieces, orangePieces);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(4, 5));

//CODING CHALLENGE #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54, 71);
// const avgKoalas2 = calcAverage(23, 34, 27);

// function checkWinner(avgDol, avgKoal) {

//     if (avgDol / avgKoal >= 2) {
//         console.log(`Dolphins win (${avgDol} vs ${avgKoal})`);
//     } else if (avgKoal / avgDol >= 2) {
//         console.log(`Koalas win (${avgKoal} vs ${avgDol})`);
//     } else {
//         console.log(`There is no winner. Dolphins vs Koalas (${avgDol} vs ${avgKoal})`);
//     }
// }

// checkWinner(avgDolphins2, avgKoalas2);

//ARRAYS

// const friends = ['Michel', 'Bob', 'Sam'];
// console.log(friends);
// const yeats = new Array(1991, 2000, 2015);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Shmidt', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// const years = [1956, 1986, 2000, 2007];
// console.log(calcAge(years[0]));

// const ages = [calcAge(years[0]), calcAge(years[1])]
// console.log(ages);

// //ARRAYS METHODS
// const friends = ['Michel', 'Bob', 'Sam'];
// //put in the end
// friends.push('Jay');
// //put in the beginning
// friends.unshift('John');
// console.log(friends);
// //remove element
// friends.pop();//Last
// const popped = friends.pop();
// console.log(`'${popped}' was removed from friends`);
// friends.shift();//First
// console.log(friends);
// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('Bob'));
// friends.push(23);
// console.log(friends.includes(23));
// console.log(friends.includes('23'));

// //CODDING CHALLENGE #2
// const calcTip = (bill) => {
//     return (bill >= 50) && (bill <= 300) ? 15 : 20;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
// console.log(tips);
// console.log(`Totals: ${total}`);

// //OBJECTS
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtnann',
//     age: 2023 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// const interestedIn = prompt('What do you know about Jonas. Choose between firstName, lastName, age, job and friends.');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong reques!!!');
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = 'twiter/link';
// console.log(jonas)
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.`);

// //OBJECT METHODS
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtnann',
//     birthday: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birthday) {
//     //     return 2023 - birthday;
//     // },

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2023 - this.birthday;
//     // },

//     calcAge: function () {
//         this.age = 2023 - this.birthday;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//     }
// }

// // console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge']());
// console.log(jonas.age);
// console.log(jonas.getSummary());

// //CODING CHALLEGE #3
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     heigh: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.heigh ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     heigh: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.heigh ** 2);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(`${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi})`);

// //LOOP FOR
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} ✊`);
// }

// //LOOPING ARRAYS, BREAKING AND CONTINUING
// const jonasArray = [
//     'Jonas',
//     'Schmedtnann',
//     1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]
// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 1998, 2006, 1967];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] == 'number') break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// //LOOPING BACKWARDS
// const jonasArray = [
//     'Jonas',
//     'Schmedtnann',
//     1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----------- Staring exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetion 🏋️‍♀️ ${rep}`);
//     }
// }

// //WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetion 🏋️‍♀️ ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice == 6) console.log(`Loop is about to end...`);
// }

// //CODING CHALLENGE #4
// const bills = [22, 295, 176, 440, 37, 185, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const arr = [];

// const calcTip = (bill) => {
//     return (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.2;
// }

// const calcAverage = (arr) => {
//     const arrayLength = arr.length;
//     let sum = 0;
//     for (let i = 0; i < arrayLength; i++) {
//         sum += arr[i];
//     }
//     return sum / arrayLength;
// }

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(bills[i] + tip);
// }

// console.log(bills, tips, totals);
// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));