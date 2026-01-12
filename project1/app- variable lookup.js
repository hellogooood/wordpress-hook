// Variable Lookup
// {} - code block

// JS first checks for local scope var then global scope variables

const globalNumber = 5;

function add(num1, num2) {
    const result = num1 + num2 + globalNumber;
    return result;
}

console.log(add(3,4));


let globalNumber2 = 5;

function times(num3, num4) {
    let globalNumber2 = 10;
    const result2 = num3 * num4 + globalNumber2;
    return result2;
}

console.log(times(3,4));