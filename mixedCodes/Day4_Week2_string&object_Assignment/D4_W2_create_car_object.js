"use strict";

let car = {
    make: "honda",
    model: "civic",
    year: 2014,
    odometer: 55469,
    serviceCount: 8,
    service: function () { return this.serviceCount++ },
    getOdometerReading: function () { return this.odometer },
    reset: function () {
        let odo_reset = this.odometer = 0;
        let serv_rese = this.serviceCount = 0;
        return (odo_reset + ", " + serv_rese)
    }
}

