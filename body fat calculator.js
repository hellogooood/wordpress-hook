// Your code here 👇
const weight = prompt("How much do you weigh: ");
const circum = prompt("What is your circumference: ");
console.log(weight);
console.log(circum);
const p = 1 / weight * ((415 * circum) - 9842) - 8.2;
console.log("Your body fat percentage is " + p);