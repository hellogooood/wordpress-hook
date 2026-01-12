// getAttribute();
// setAttribute();

// select element
const first = document.querySelector('.first');
//then get attribute
const classValue = first.getAttribute('class');
console.log(classValue);


const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);


const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';
console.log(last);


const links = document.querySelectorAll('.first');
console.log(links);