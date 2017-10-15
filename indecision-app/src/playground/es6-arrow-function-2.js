// arguments object no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); // not accessible in arrow functions
    return a + b;
};

console.log(add(1001, 1));

// this keyword - no longer bound

const user = {
    name: 'Alan',
    cities: ['New York', 'La Paz', 'Seattle'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());