const car = {
    make: "Hyundai"
    , model: "Kona"
    , year: "2019"
    , color: "Red"
    , running: false
    , fuelLevel: 100
    , setEngineStatus: function (status) {
        this.running = status;
        //car.running = car.running ? false : true;
    }
    , useFuel: function (currentFuelLevel) {
        this.fuelLevel = currentFuelLevel - 20;
    }
}

car.setEngineStatus(true);
console.log(`${car.year} ${car.make} ${car.model} is Running:`, car.running);

const engineStatus = setInterval(function() {
    
    car.useFuel(car.fuelLevel);
    console.log(car.fuelLevel);

    if (car.fuelLevel <= 0) {
        car.setEngineStatus(false);
    }

    if (!car.running) {
        clearInterval(engineStatus);
        console.log(`${car.year} ${car.make} ${car.model} is Running:`, car.running);
    }
}, 1000);