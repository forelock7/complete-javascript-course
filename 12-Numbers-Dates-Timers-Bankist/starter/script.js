'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrese 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;
  // Call the timer every seconds. To call func immediately
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// //  170. Converting and checking Numbers
// console.log(23 === 23.0);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3); //NOT EQUAL

// console.log('23');
// // Convert strings to numbers
// console.log(Number('23'));
// console.log(+'23'); // more better converting string to number

// // Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseInt(' 2.5rem '));
// console.log(Number.parseFloat(' 2.5rem '));
// console.log(parseFloat(' 2.5rem ')); // - oldschool representation. Better to use Mumber.parseFloat (provide a namespace)

// // Check is value not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X')); // true
// console.log(Number.isNaN(23 / 0)); // false

// // Check if value is number
// console.log(Number.isFinite(20)); // true - the best way to check is value NUMBER
// console.log(Number.isFinite('20')); // false

// console.log(Number.isInteger(23));

// // 171. Math and Rounding
// console.log(Math.sqrt(25)); // 5
// console.log(Math.max(5, 6, 8, '23', 10)); // 23
// console.log(Math.min(5, 6, 8, '23', 10)); // 5
// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592...
// console.log(Math.trunc(Math.random() * 6) + 1); // random value from 0 to 6

// const randomInt = (min, max) =>
//   Math.trunc(Math.floor() * (max - min) + 1) + min;
// console.log(randomInt(10, 19));

// // Rounding Int
// console.log(Math.trunc(23.7)); // 23

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.5)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.5)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.5)); // 23

// console.log(Math.floor('23.5')); // 23 - also does type quarsion

// console.log(Math.trunc(-23.7)); // -23
// console.log(Math.ceil(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24

// // Rounding decimals
// console.log((2.7).toFixed(0)); // return always STRING - '3'
// console.log((2.7).toFixed(3)); // '2.700'
// console.log((2.345).toFixed(2)); // '2.35'
// console.log(+(2.345).toFixed(2)); // 2.35

// // 172. Remainder operator
// console.log(5 % 2); // 1 // 2 + 2 + 1 = 1
// console.log(5 / 2); // 2.5
// console.log(8 % 3); // 2 // 3 + 3 + 2 = 2
// console.log(6 % 3); // 0

// const isEven = n => n % 2 === 0;
// console.log(isEven(3)); // false
// console.log(isEven(8)); // true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     // 0, 2, 4, 6 ...
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   });
// });

// // 173. Numeric Separators
// // 287,460,000,000,000
// const diameter = 287_460_000_000_000;
// console.log(diameter); // 287460000000000

// const price = 345_99; // 34599
// console.log(price);

// const PI = 3.14_15;
// console.log(PI);

// console.log(Number('230_000')); // NaN

// // 174. BigInt
// console.log(2 ** 53 - 1); // the biggest number in JS (9007199254740991)
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1); // it and bigger are unsafe numbers

// console.log(32134274763276547365783487423897n);
// console.log(BigInt(32134274763276547365783487423897));

// // Operations
// console.log(10000n + 10000n);
// // console.log(Math.sqrt(16n)); // Doesn't work

// // cannot mix BigInt and other types
// const huge = 4762754657468n;
// const int = 32;
// // console.log(huge + int);
// console.log(huge + BigInt(int));

// console.log(20n > 15); // true
// console.log(20n === 20); // '===' doesn't do type quertion
// console.log(typeof 20n); // bigint
// console.log(20n == 20); // true

// console.log(huge + ' is REALLY big!!!');

// // Divisions
// console.log(11n / 3n); // 3n - cut off decimal part
// console.log(10 / 3); // 3.33333333333335

// // 175. Creating Dates
// // Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Mar 11 2023 18:28:55'));
// console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0200 (Eastern European Standard Time)

// console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // it's a timestamp =  Sun Jan 04 1970 03:00:00 GMT+0300 (Eastern European Standard Time)

// // Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Standard Time)
// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // 10
// console.log(future.getSeconds()); // 0
// console.log(future.toISOString()); // 2037-11-19T13:23:00.000Z
// console.log(future.getTime()); // timestamp = 2142249780000 (seconds from 1970.1.1)

// console.log(Date.now()); // 1678552881365

// future.setFullYear(2040);
// console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0200 (Eastern European Standard Time)

// // 177. Operations with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Standard Time)
// console.log(Number(future)); // 2142249780000 - is converted to timestamp
// console.log(+future); // 2142249780000 - is converted to timestamp

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

// // 178. Internationalizing Dates (Intl)
// // Create current date
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric',
//   // weekday: 'long',
// };
// labelDate.textContent = new Intl.DateTimeFormat(
//   currentAccount.locale,
//   options
// ).format(now);

// // 179. Internationalizing Numbers (Intl)
// const num = 3637889.23;
// const options = {
//   style: 'unit',
//   unit: 'mile-per-hour',
//   // style: 'currency',
//   // currency: 'EUR',
// };
// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); // 3,637,889.23 mph
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); // 3.637.889,23 mi/h
// console.log('Ukraine: ', new Intl.NumberFormat('uk-UA', options).format(num)); // 3,637,889.23 милі/год
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num)
// ); // uk-UA 3 637 889,23

// // 180. Timers: setTimeout and setInterval
// // setTimeout
// const ingredients = ['olives', 'spinach'];
// const ingredients2 = ['olives', 'mushrooms'];
// const pizzaTimer = setTimeout(
//   (ing, ing2) => console.log(`Here is your pizza with ${ing} and ${ing2}`),
//   3000,
//   ...ingredients
// ); // Code does not stop execution (Asynchronus)
// console.log('Waiting');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// //setInterval
// setInterval(function () {
//   const now = new Date();
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   };
//   console.log(new Intl.DateTimeFormat(navigator.locale, options).format(now));
// }, 1000);
