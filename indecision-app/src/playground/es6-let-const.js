var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jack';
nameLet = 'Susie';  // no longer valid to redefine w/same variable name
console.log('nameLet', nameLet);

const nameConst = 'Ben';
//nameConst = 'Bob'; // can't reassign this variable
console.log('nameConst', nameConst);

// Block Scoping for let and const
// first function scoping-->
var fullName = 'Jack Black';

if (fullName) {
    var firstName = fullName.split(' ')[0];
}

console.log(firstName); // function scoping --> 'if' is just inside block, so this should work with var

// Using block scoping (let, const)
let fullN = 'Jack Black';

if (fullN) {
    let firstN = fullN.split(' ')[0];
}

console.log(firstN); // blocked scoping --> 'firstN' is in 'if' block, so this won't work