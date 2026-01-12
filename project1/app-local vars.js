// local scope
// can not be accessed from outside code bloakc
// if - NOT VAR


let name = 'bobo';


function calculate() {
    const name = 'john';
    const age = 25;
    becomesGlobal = 'global variable' //no const or let keyword infront
}
calculate();
console.log(becomesGlobal);

// console.log(age);  age not accessible outside of code block

calculate();

if (true) {
}

console.log(`my name is ${name} and I'm awesome`);