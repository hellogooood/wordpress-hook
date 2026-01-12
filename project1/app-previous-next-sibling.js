// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
// console.log(first);
const second = first.nextSibling.nextSibling.style.color = 'red';
console.log(second);

const last = document.querySelector('#last');
console.log(last);
const third = last.previousSibling.previousSibling;
console.log(third);