// import './utils';
import subtract, { square, add } from './utils'; // defaults not in curly braces
import isSenior, { isAdult, canDrink } from './person';

console.log('app.js is running!');

// console.log(square(4));
// console.log(add(400, 11));
// console.log(subtract(100, 25));

console.log(isAdult(20));
console.log(canDrink(20));
console.log(isSenior(77));