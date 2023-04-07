// Importing module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing module');
// // console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // default import and common one
import add, { cart } from './shoppingCart.js'; // default import
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

// // 273. Top-Level await (ES2022)

// // // In simple script 'await' works only inside async function
// // async function x() {
// //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// //     const data = await res.json();
// //     console.log(data);
// // };

// // In module do not need 'async' function for 'await'!!!! It block entire execution ('Something will be at the end')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // Option 1
// const lastPost = getLastPost(); // returt Promise
// console.log(lastPost);
// lastPost.then(last => console.log(last));

// // Option 2
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// // 274. The Module Pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);

// // 275. CommonJS Modules (It doesn't work in browser, but it works in NodeJS)
// // Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
// };

// // Import
// const {addToCart} = require('./shoppingCart.js')

// 277. Introduction to NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
// state.user.loggedIn = false;
// console.log(stateClone); // also changed

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);

// 278. Bundling with Parcel and NPM
// npm init -> init project with npm and package.json will be created
// npm install leaflet -> install leaflet module and it will be added as dependancy in package.json
// npm i lodash-es -> same
// npm i parcel --save-dev -> install parsel and add it in devDependancy
// npm i parcel@1.12.4 -> just with particular version
// npx parcel index.html -> bundle and start live server
// Kinda should prevent reloading
// if (module.hot) {
//   module.hot.accept();
// }
// import cloneDeep from 'lodash'; // do not need related path with parcel
// you can set script in package.json
// "scripts": {
//     "start": "parcel index.html"
//   },
// and run parcel:
// npm run start
// npm parcel build index.html -> build final bundling
// npm i live-server g -> install module globally and you can run it in any dir

// // 279. Configuring Babel and Polyfilling

// // Before need to npm i core-js and then:
// import 'core-js/stable'; // for convert(polyfill) feature of ES6 for old browsers (like Promise, Array.prototype.find ...)

// // Polyfilling async function
// import 'regenerator-runtime/runtime';
