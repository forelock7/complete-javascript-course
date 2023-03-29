'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 enhanced objects literals
  openingHours,

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  //ES6 enhanced function
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  //Spread
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //Rest
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [1, 3, 4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p, q, r] = [5, 6];
// console.log(p, q, r);

// const [s = 1, t = 1, v = 1] = [8];
// console.log(s, t, v);

// //Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default variables
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starter);

// //Mutating variables
// let a2 = 111;
// let b2 = 999;
// const obj = { a2: 23, b2: 7, c2: 14 };
// ({ a2, b2 } = obj);
// console.log(a2, b2);

// //Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// //Spread Operator(...)
// const arr2 = [7, 8, 9];
// const newArr = [1, 2, ...arr2];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Coppy array
// const mainManuCopy = [...restaurant.mainMenu];
// //Join array
// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu2);

// //Iterables: array, strings, maps, sets. Not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.']; //spread string into array
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredients 1?"),
// //   prompt('Ingredients 2?'),
// //   prompt('Ingredients 3?'),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);//Don't use it
// // restaurant.orderPasta(...ingredients);

// //Objects
// const restaurantCopy = { foundedIn: 1991, ...restaurant, founder: 'Guiseppe' };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// //Rest Pattern - collects elements in array that are not used in structure if assignment
// const [a1, b1, ...other] = [1, 2, 3, 4, 5];
// console.log(a1, b1, other);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// //function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 5, 7);
// add(3, 5, 7, 8, 2, 5, 4);

// const xx = [32, 5, 6];
// add(...xx);

// restaurant.orderPizza('mushrooms', 'onions', 'olives');
// restaurant.orderPizza('mushrooms');

// //OR operator
// //Use ANY data type, return ANY data type, short-curcuting
// console.log(3 || 'Jonas'); //3
// console.log('' || 'Jonas'); //Jonas(''=false)
// console.log(true || 0); //true
// console.log(0 || true); //true (0=false)
// console.log(undefined || null); //null=false (undefined=false)
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //returns first true value - 'Hello'

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10; // shorter but if 0 it doesn't work (use ??)

// //AND operator
// console.log(0 && 'Jon'); //0
// console.log(7 && 'Jon'); //Jonas
// console.log('Hello' && 23 && null && 'Jon'); //first false value - null
// //practical exemple
// if (restaurant.orderPasta) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //The Nullish Coalescing Operator(??)
// restaurant.numGuests = 0;
// const guest3 = restaurant.numGuests || 10;
// //Nullish values: null and undefined (NOT 0 or '')
// const guest4 = restaurant.numGuests ?? 10;
// console.log(guest4);

// //Logical assighment Operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;//will not work if numGuests was 0
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // the same with &&=
// // rest1.owner = rest1.owner && '<ANONIMUS>';//will be added 'owner: undefined'
// // rest2.owner = rest2.owner && '<ANONIMUS>';

// rest1.owner &&= '<ANONIMUS>'; // will NOT be added 'owner' fieald at all if it missed before
// rest2.owner &&= '<ANONIMUS>';

// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //create 2 arrays
// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const playersFinal = ['Thiago', 'Coutinho', 'Perisic', ...player1];
// console.log(playersFinal);

// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...arbitraryPlayerNumber) {
//   for (let i = 0; i < arbitraryPlayerNumber.length; i++) {
//     console.log(arbitraryPlayerNumber[i] + ' - ' + i);
//   }
// };

// printGoals('Lewandowski', 'Gnarby');
// printGoals(...game.scored);

// //Loop for-of
// const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu3) console.log(item);
// // for (const item of menu3.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// //Destructuring
// for (const [i, el] of menu3.entries()) console.log(`${i + 1}: ${el}`);

// //Optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');
// //Arrays
// const users = [{ name: 'Jonas', email: 'hello@ss.com' }];
// console.log(users[1]?.name ?? 'User array empty');

// //Looping Objects - properties NAME
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are opening on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Looping Objects - properties VALUE
// const values = Object.values(openingHours);
// console.log(values);

// //Entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// //CODING CHALLENGE
// // 1.
// const scoredPlayers = game.scored.entries();
// for (let [i, el] of scoredPlayers) {
//   console.log(`Gole ${i + 1}: ${el}`);
// }
// // 2.
// const odds = Object.values(game.odds);
// let sumOdds = 0;
// for (let odd of odds) sumOdds += odd;
// const aveOdds = sumOdds / odds.length;
// console.log(`Odds average is ${aveOdds}`);
// // 3.
// const oddsAll = Object.entries(game.odds);
// console.log(oddsAll);
// for (let [team, odd] of oddsAll) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
// //BONUS
// const ss = {};
// for (let somePlayer of game.scored) {
//   ss[somePlayer] ? ss[somePlayer]++ : (ss[somePlayer] = 1);
// }
// console.log(ss);

// //Sets
// const orderSet = new Set(['Pasta', 'Risotto', 'Pasta', 'Risotto', 'Pizza']);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pasta'));
// console.log(orderSet.has('Some'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);
// // orderSet.clear();
// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //Map
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italiano', 'Pizzaria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(3));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.set([1, 2], 'Test');
// // console.log(rest.get([1, 2]));
// const arrMap = [1, 2];
// rest.set(arrMap, 'Test');
// console.log(rest.get(arrMap));
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// //Maps iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Corect!!!'],
//   [false, 'Try again!!!'],
// ]);
// console.log(question);
// //Convert Object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // console.log(answer);
// // console.log(question.get(question.get('correct') === answer));
// //Convert map to aaray
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// //CODING CHALLENGE #3
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3.
// const totalTime = [...gameEvents.keys()].pop();
// console.log(totalTime);
// console.log(
//   `An event happened, on average, every ${totalTime / gameEvents.size}`
// );
// // 4.
// for (const [key, value] of gameEvents) {
//   console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${value}`);
// }

// //Strings Part 1
// const airplane = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log('B737'[0]);

// console.log(plane.length);
// console.log(airplane.indexOf('r'));
// console.log(airplane.lastIndexOf('r'));
// console.log(airplane.indexOf('portugal'));

// console.log(airplane.slice(4));
// console.log(airplane.slice(4, 7)); //4 - included, 7 - NOT included

// console.log(airplane.slice(0, airplane.indexOf(' ')));
// console.log(airplane.slice(airplane.indexOf(' ') + 1));

// console.log(airplane.slice(-2));
// console.log(airplane.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1); //Last letter
//   if (s === 'B' || s === 'E') console.log(`You've got the middle seat`);
//   else console.log(`You've got lucky`);
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //Strings Part 2
// const airplane2 = 'TAP Air Portugal';
// const plane2 = 'A320';

// console.log(airplane2.toLowerCase());

// //fix capitalization
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing check email
// const email = 'hello@jonas.io';
// const loginEmail = 'Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '268,97E';
// const priceUS = priceGB.replace('E', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane22 = 'Airbus A320neo';
// console.log(plane22.includes('A320'));

// if (plane22.startsWith('Airbus') && plane22.endsWith('neo'))
//   console.log('This  plane belongs to Airbus family');

// //Strings Part 3
// console.log('a+very+nice+result'.split('+'));

// const [firstName, lastName] = 'Jonas Schmidt'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];
//   for (const n of names) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmidt');

// //Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); //all string should have 25 size
// console.log(message.padStart(25, '+').padEnd(35, '+')); //all string should have 35 size
// console.log('Jonas'.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   // const str = String(number);
//   const str = number + ''; //convert number to the string
//   const last = str.slice(-4); //take last 4 digits
//   console.log(last.padStart(str.length, '*'));
// };

// maskCreditCard(3243254565432);
// maskCreditCard('423435634565767657');

// //Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planeInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)} `);
// };
// planeInLine(3);
// planeInLine(24);

//CODING CHALLENGE #4
// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const textArray = text.split('\n');
//   let i = 1;
//   for (const word of textArray) {
//     const [first, second] = word.toLowerCase().trim().split('_');
//     const textToDisplay = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${textToDisplay.padEnd(20, ' ')} ${'✅'.repeat(i)}`);
//     i++;
//   }
// });

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
