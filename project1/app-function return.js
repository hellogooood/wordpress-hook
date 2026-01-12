// arrays functions and objects
//functiions - declare invoke
//return
// default undefined, shortcuts, ignores after
// 1 inch = 2.54 cm
const wallHeight = 80

function calculate(value) {
    // const newValue = value * 2.54;
    // return newValue;
    return value * 2.54;
}


const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height]
console.log(dimensions);