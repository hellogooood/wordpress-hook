// array properties and methods

let names = ['john', 'netsy', 'maria', 'heidi', 'dana'];

//length
console.log(names.length);
console.log(names[names.length - 1]);

//concat
const lastNames = ['pepper', 'onion', 'banana']
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift - add to begiining of array
allNames.unshift('susy');
console.log(allNames);
//shift - remove from begging of array
allNames.shift();
allNames.shift();
console.log(allNames);

//push - add to end of array
allNames.push('susy');
console.log(allNames);
//pop - remove from end of array
allNames.pop();
allNames.pop();
console.log(allNames);

// splice - mutates original array - starting at index, how many
const specificNames = allNames.splice(2,1);
console.log(specificNames);
console.log(allNames);

