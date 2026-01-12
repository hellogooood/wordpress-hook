//select the element or group of elements that we want
// decide the effect we want to apply

// querySelector('any css'); - selects single
//querySelectorAll('any css') = selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function(item) {
    console.log(item);
    item.style.color = 'yellow';
});