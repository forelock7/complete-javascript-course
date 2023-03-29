/*
//LECTURE: Values and Variables
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!!!');
console.log(40 + 8 + 23 - 10);
*/
/*
//LECTURE: Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof 'Vova');
console.log(typeof 23);
console.log(typeof true);
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);
*/
/*
//LECTURE: let, const and var
let age = 31;
age = 32;

const birthday = 1986;
// birthday = 1999;
// const job;

var job = "programmer";
job = "teacher";
// lastName = "Schedmttann"
// console.log(lastName);
*/
/*
//LECTURE: Basic Operators
//Math Operatos
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
//2 ** 3 - means 2 to power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmidt';
console.log(firstName + ' ' + lastName);
//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++
x--
console.log(x);
//Comparison operators
console.log(ageJonas > ageSarah);
*/
/*
//17. Strings and Template Literals
const firstName = 'Jonas';
const now = 2023;
const birthyear = 1986;
const jonasNew = `I'm ${firstName}, a ${now - birthyear} years old.`
console.log(jonasNew);
console.log("Some \n\
multi-line \n\
script ");
console.log(`Some
multi-line
script 2`);

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Type Conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(String(23), 23);
//type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);

//Truthy and Falsy Values
//5 falcy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let height;
if (height) {
    console.log('Heigh is defined')
} else {
    console.log('Heigh is undefined')
}

//Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('See me(Strict)');
//=== - strict comparison without Coercion
//== - loose comparison with type Coercion
if (age == 18) console.log('See me(loose)');

const favorite = prompt("What's you favorite number");
console.log(favorite);
console.log(typeof favorite);
if (Number(favorite) !== 25) console.log("It's not 25");

//LECTURE: Logical Operators
const hasDrivLic = true;
const hasGoodVision = true;
console.log(hasDrivLic && hasGoodVision);
console.log(hasDrivLic || hasGoodVision);
console.log(!hasGoodVision);
*/