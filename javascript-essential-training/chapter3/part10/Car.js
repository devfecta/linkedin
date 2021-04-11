/**
 * class Name {}
 * const Name = class {}
 */
class Car {
    
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.running = false;
        this.fuelLevel = 100;
    }

    setEngineRunning(status) {
        this.running = status;
    }

    useFuel(currentFuelLevel) {
        this.fuelLevel = currentFuelLevel - 20;
    }



    engineStatus(carObject) {
        setInterval(function() {
    
            if (!carObject.running) {
                clearInterval(carObject.engineStatus);
                console.log(`${carObject.year} ${carObject.make} ${carObject.model} ran out of gas.`);
            }
            else {
                console.log("Car Fuel Level:", carObject.fuelLevel);
                carObject.useFuel(carObject.fuelLevel);

                if (carObject.fuelLevel <= 0) {
                    carObject.setEngineRunning(false);
                }
            }
        }, 1000);
    }

}

export default Car;