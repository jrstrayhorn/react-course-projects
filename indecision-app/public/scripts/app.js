"use strict";

// // arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     //console.log(arguments);
//     return a + b;
// };
// console.log(add(55, 1));

// // this keyword - no longer bound with arrow functions

// const user = {
//     name: 'JR Strayhorn',
//     cities: ['Cincinnati', 'Miramar'],
//     printPlacesLived() {

//         // map - will return a new array with values transformed
//         return this.cities.map((city) => this.name + ' has lived in ' + city);

//         // this.cities.forEach((city) => {
//         //     console.log(this.name + ' has lived in ' + city);
//         // });
//     }
// };
// console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multipleBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (num) {
            return num * _this.multipleBy;
        });
    }
};

console.log(multiplier.multiply());
