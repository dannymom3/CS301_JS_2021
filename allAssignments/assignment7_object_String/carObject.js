"use strict";

let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);

car.model = "RAV4";
console.log(car);

delete car.make;
console.log(car);