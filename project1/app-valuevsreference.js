// when assigning primitive data type value to a variable any changes are made directly that value, wihtou affecting irignal avalue

// when assigning non-primitive datat ype value to a variable is done by reference so any changes willa ffect all the refernces.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person  = { name:  'bob '};
let person2 = person;
person2.name = 'susy';

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);