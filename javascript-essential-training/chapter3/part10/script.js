import Car from "./Car.js";

const car = new Car("Hyundai", "Kona", 2019, "Red");

console.log("Car Make:", car.make);
console.log("Car Model:", car.model);
console.log("Car Year:", car.year);
console.log("Car Color:", car.color);


car.setEngineRunning(true);

car.engineStatus(car);