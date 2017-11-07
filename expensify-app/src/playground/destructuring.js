//
// Object destructuring
//

// const person = {
//   name: 'Alan',
//   age: 25,
//   location: {
//     city: 'Wenatchee',
//     temp: 39
//   }
// };

// const {name:firstName ='Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); // Penguin, default: Self-Publish

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', ' Pennsylvania', '19147'];
// const [street, city, state, zip] = address;
// console.log(`You are in ${city}${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffeeType, , mediumPrice] = item;
console.log(`A medium ${coffeeType} costs ${mediumPrice}`)