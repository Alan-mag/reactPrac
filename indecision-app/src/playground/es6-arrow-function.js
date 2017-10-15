const square = function(x) {
    return x * x;
};

// const powArray = (x) => {
//     return x * x * x;
// }

// same as commented out one above
const powArrow = (x) => x * x * x;

// console.log(square(8));
// console.log(powArrow(11));

const getFirstName = (fullName) => fullName.split(' ')[0];
const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('David Blaine'));
console.log(getLastName('Derren Brown'));