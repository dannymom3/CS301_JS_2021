"use strict";

let car = {
    make: "Toyota",
    model: "Camry",
};
console.log(car);

car.model = "RAV4";
console.log(car);

delete car.make;
console.log(car);