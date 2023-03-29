/*
//LECTURE: Values and Variables
const country = "Ukraine";
const continent = "Europe";
let population = 38;

console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types
const isIsland = false;
const language = "Ukrainian";

console.log(isIsland);
console.log(language);

//LECTURE: let, const and var
//LECTURE: Basic Operators
console.log(population / 2 + 1);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const averagePopulation = 33;
console.log(population < averagePopulation);

const description = "Portugal is in Europe, and it's 11 million people speak portuguese.";
console.log(description);

//Coding Challenge #1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
console.log('markBMI: ' + markBMI);
const johnBMI = johnMass / johnHeight ** 2;
console.log('johnBMI: ' + johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log('markHigherBMI: ' + markHigherBMI);
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markBMI2 = markMass2 / markHeight2 ** 2;
console.log('markBMI2: ' + markBMI2);
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log('johnBMI2: ' + johnBMI2);
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log('markHigherBMI2: ' + markHigherBMI2);

//LECTURE: Strings and Template Literals
console.log(`Portugal is in Europe,
and it's 11 million people
speak portuguese.`);

//LECTURE: Taking Decisions: if / else Statements
if (population > averagePopulation) {
    console.log(`Portugal's population is above average`);
} else {
    console.log(`Portugal's population is ${averagePopulation - population} million below average`);
}

//Coding Challenge #2
if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}
//LECTURE: Type Conversion and Coercion
console.log('9' - '5');//4
console.log('19' - '13' + '17');//617
console.log('19' - '13' + 17);//23
console.log('123' < 57);//false
console.log(5 + 6 + '4' + 9 - 4 - 2);//1143

//LECTURE: Equality Operators: == vs. ===
let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// let numNeighbours = prompt("How many neighbour countries does your country have?");

if (numNeighbours === 1) {
    console.log('Only 1 border');
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}
*/
//Coding Challenge #3 