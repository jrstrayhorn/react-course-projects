'use strict';

// const square = function (x) {
//     return x * x;
// };

// //const squareArrow = (x) => {
// //    return x * x;
// //};

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

var getFirstNameShort = function getFirstNameShort(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstNameShort('JR Strayhorn'));
