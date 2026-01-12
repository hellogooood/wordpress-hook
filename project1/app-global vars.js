// Global Score vs Local Scope
//any vairalbe outside code block {} is said to be in Global Scope
// ban be accessed anywhere in the program
//gotcahs : name collisions, modify mistake

let name = 'bobo';
first_name = 'peter';

function calculate() {
    // some other code
    console.log(first_name);
    first_name = "orange";

}

calculate();

if (true) {
    console.log(first_name);
    first_name = "pants";
}

console.log(`my name is ${first_name} and I'm awesome`);