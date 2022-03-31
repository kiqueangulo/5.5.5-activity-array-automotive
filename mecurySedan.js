//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false
    }

    loadPassenger(num) {
        if (this.passenger + num < this.maximumPassengers) {
            return this.passenger += num;
            console.log(`You\'re welcome to get in the ${this.make} ${this.model}`);
        } else {
            console.log(`${this.make} ${this.model} does not have enough room.`);
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log('Vehicle is on!');
        }
    }

    checkForService(mileage) {
        if (this.mileage > 30000) {
            return this.scheduleService = true;
        }
    }
}

// Testing
let lambo = new Car('Lamborghini', 'Huracan STO', 2021, 'Silver', 0);
console.log(lambo.make);