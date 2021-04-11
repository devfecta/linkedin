const car = {
    make: "Hyundai"
    , model: "Kona"
    , year: 2019
    , color: "Red"
    , running: false
    , fuelLevel: 100
    , setEngineRunning: function (status) {
        this.running = status;
    }
    , useFuel: function (currentFuelLevel) {
        this.fuelLevel = Math.floor(currentFuelLevel - (currentFuelLevel * 0.20));
    }
    , engineStatus: setInterval(function() {
    
        if (!car.running) {
            clearInterval(car.engineStatus);
            console.log(`${car.year} ${car.make} ${car.model} ran out of gas.`);
        }
        else {
            console.log("Car Fuel Level:", car.fuelLevel);
            car.useFuel(car.fuelLevel);

            if (car.fuelLevel <= 0) {
                car.setEngineRunning(false);
            }
        }
    }, 1000)
}

car.setEngineRunning(true);
console.log(`${car.year} ${car.make} ${car.model} is Running:`, car.running);