// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens

// functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function(closure)

// Higher Order function - accepts another function as an argument or retunrs another function as a result

// Call back function - passed to another function as an argument ane exxecute inside that function

function morning(name){
    return `Good morning ${name.toUpperCase()}`;
}


function afternoon(name){
    return `Good afternoon ${name.repeat(2)}`;
}

function greet(name, callbackFunc){
    const myName = 'harry'
    console.log(`${callbackFunc(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon)
