// function fullName(firstName, lastName){
//     let fullName = `${firstName} ${lastName}`;
//     return fullName.toUpperCase();
// };

// console.log(fullName('harry', 'gils'));

function fullName({firstName, lastName}){
    let fullName = `${firstName} ${lastName}`;
    return fullName.toUpperCase();
};


console.log(fullName({lastName: 'jordan', firstName: 'peter'}));

// two ways to pass in parameters
