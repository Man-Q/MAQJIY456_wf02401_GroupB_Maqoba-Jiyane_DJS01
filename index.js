/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = distance + (velocity*time) //calcultes new distance
const newRemainingFuel = remainingFuel - (fuelBurnRate*time) //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (velocity, acceleration, time) => { 
  const newVelocityInMeters = velocity * 1000
  const newVelocityInKiliMeters = newVelocityInMeters/3600
  return (newVelocityInKiliMeters + (acceleration*time)) * 3600/1000
}

const newVelocity = calcNewVel(velocity, acceleration, time) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance/3600} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuel} kg`);






