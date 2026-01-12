// String Properties and methods
// wrapper String object, don't memorzie methods

let text = ' Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length - 1))
console.log(text.indexOf('P'));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('Jordan'));
console.log(text.slice(0, 5)); //starts at and ends
console.log(text.slice(-3));