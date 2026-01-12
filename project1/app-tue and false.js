// true and false
// false - "", '', 0, -0. NaN, false, null, undefined



const bool1 = true;
const bool2 = 2 > 1;

if (true) {
    console.log(`Hey it works!`);
}
if (bool2){
    console.log(`Hey it also works!`);
}

const text = 'john'

if (text) {
    console.log(`Hey it's true`);
} else {
    console.log(`false`);
}

const text2 = ''

if (text2) {
    console.log(`Hey it's true`);
} else {
    console.log(`false`);
}