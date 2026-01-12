const person1 = {
    name: 'peter',
    age: 19,
    status: 'resident',
    
    sleep(){
        console.log("I'm going to sleep")
    }
}

const person2 = {
    name: 'matthew',
    age: 22, 
    status: 'tourist',

    drive(){
        console.log("going for a ride function");
    }
}

if (person1.age >= 18 && person1.status === 'resident') {
    console.log('you can vote');
} else {
    console.log('sorry no voting today');
}
    
if (person2.age >= 18 && person2.status === 'resident') {
    console.log('you can vote');
} else {
    console.log('sorry no voting today');
}
    

person1.sleep();
person2.drive();
console.log("My name is " + person1.name);
person1.name = 'harry';
console.log(person1.name);