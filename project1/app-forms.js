// submit event listener
// prevent default
// how to get a value

{/* <form action="" id=""form>
<input type="text" id="email">
<input type="text" id="password">
<input type="text" id="submit">

</form> */}


const form = document.getElementById('form');
const name = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prevents form from refreshing
    console.log('form submitted');
    console.log(email.value);
    console.log(password.value);
});

