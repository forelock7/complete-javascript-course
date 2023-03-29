// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2023 - birthYear;
// console.log();
// console.log(calcAge);
// console.log('cassssssxa');
// console.log(calcAge);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   debugger;
//   console.log(measurement);

//   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//CODING CHALLENGE

const printForecust = function (temps) {
  let massage = '';

  for (let i = 0; i < temps.length; i++) {
    massage = massage.concat(`... ${temps[i]}C in ${i + 1} days `);
  }
  return massage.concat(`...`);
};

const t = [17, 21, 23];
console.log(printForecust(t));
