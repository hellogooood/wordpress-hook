// functions, return, if, arrays, for loop

const gas = [20 ,40, 70, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
        //total = arr[i] +  total
    }
    if (total > 100){
        console.log(`Whoa!  Too much spending!`);
        return total;
    }
        console.log(`You're good... less then $100`);
        return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 5000, 2]);

// object in {}
console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal
});