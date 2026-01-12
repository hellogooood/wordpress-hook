// web storage api - provided by browswer
// session storage, local storage
// setItem, getItem, removeItem, clear

// inbrowser tools select application and see storage
// example shopping carts

// localStorage.setItem('name', 'john'); // while browser is open
// sessionStorage.setItem('name', 'john'); //while tab is open

localStorage.setItem('firstname', 'john');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'main st');

const firstname = localStorage.getItem('firstname');
console.log(firstname);
localStorage.removeItem('firstname');
localStorage.removeItem('name'); 
localStorage.clear();
