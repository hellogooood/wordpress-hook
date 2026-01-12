// forEach
// does not return new array

// this array has an object for each item
const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'peter', age: 25, position: 'designer'},
    {name: 'susy', age: 30, position: 'the boss'}
];

function showPerson(person){
    console.log(person);
}

//people.forEach(showPerson)

// or more like Ruby :)

people.forEach(function(item) {
    console.log(item.position.toUpperCase());
});

