"use strict";

let car = {
    make: "honda",
    model: "civic",
    year: 2014,
    odometer: 55469,
    serviceCount: 8,
    service: function() { return this.serviceCount++ },
    getOdometerReading: function() { return this.odometer },
    reset: function() {
        let odoReset = this.odometer = 0;
        let servRese = this.serviceCount = 0;
        return (odoReset + ", " + servRese);
    }
}