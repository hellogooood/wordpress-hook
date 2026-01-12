function calculateTotal(subTotal, tax) {
    return subTotal + tax
}

const order1 = calculateTotal(30, 15)
const order2 = calculateTotal(40, 5)
const order3 = calculateTotal(10, 13)

console.log(order1);
console.log(order2);
console.log(order3);

const sum = function calculateTotal(subTotal, tax){
    return subTotal + tax
};

console.log(sum(3,4));
console.log(order1, order2, order3);