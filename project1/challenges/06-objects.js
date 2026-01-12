const car = {
    make: 'gmc',
    model: 'sierra',
    year: 2017,
    colors: ['white', 'black', 'red'],
    hybrid: false,

    drive(){
        return console.log('drive');
    },
    stop(){
        return console.log('stop');
    }
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
