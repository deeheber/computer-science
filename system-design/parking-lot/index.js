/**
 * Design a parking lot using object-oriented principles.
 * https://www.freecodecamp.org/news/parking-lot-challenge-solved-in-javascript/
 * https://medium.com/double-pointer/system-design-interview-parking-lot-system-ff2c58167651
 */
class ParkingLot {
  spots

  constructor(numSpots) {
    this.spots = new Array(numSpots).fill(null)
  }

  park(vehicle) {
    // code to park a vehicle
    let lastFreeSpot = this.canPark(vehicle.size)
    if (lastFreeSpot !== -1) {
      // park the car
      let counter = 0
      while (counter < vehicle.size) {
        this.spots[lastFreeSpot - counter] = vehicle
        counter++
      }
      return
    }

    console.error(
      `Not enough space in lot for ${JSON.stringify(vehicle, null, 2)}`
    )
  }

  leave(vehicle) {
    // vehicle vacates the spot

    // less performant way
    // this.spots = this.spots.map((spot) => {
    //   if (spot?.id === vehicle.id) {
    //     spot = null
    //   }
    //   return spot
    // })

    let counter = 0
    for (let i = 0; i < this.spots.length; i++) {
      if (this.spots[i]?.id === vehicle.id) {
        this.spots[i] = null
        counter++
      }

      if (counter >= vehicle.size) {
        // return early since all spots this vehicle was taking up has been vacated
        return
      }
    }
  }

  canPark(size) {
    // check to see if you can park the vehicle
    // return the last index for the vehicle to park or -1 if you can't park
    let currentStreak = 0
    for (let i = 0; i < this.spots.length; i++) {
      if (this.spots[i] === null) {
        currentStreak += 1
      } else {
        currentStreak = 0
      }

      if (currentStreak === size) {
        return i
      }
    }

    return -1
  }

  isLotFull() {
    // check if all spots are taken
    return this.spots.every((spot) => spot !== null)
  }

  isLotEmpty() {
    // check if no spots are taken
    return this.spots.every((spot) => spot === null)
  }
}

class Vehicle {
  id
  size

  constructor(size) {
    const dateString = Date.now().toString(36)
    const randomness = Math.random().toString(36).substr(2)
    this.id = dateString + randomness
    // size = 1, 2, or 3 (small, medium, large)
    this.size = size
  }
}

// Playground to test
const myLot = new ParkingLot(6)
const motorcycle = new Vehicle(1)
const car = new Vehicle(2)
const van = new Vehicle(3)
myLot.park(car)
myLot.park(motorcycle)
// myLot.leave(motorcycle)
myLot.leave(car)
myLot.park(van)
console.log(myLot.spots)
console.log(myLot.isLotEmpty())
