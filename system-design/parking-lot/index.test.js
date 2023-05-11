const { ParkingLot, Vehicle } = require('./index')

let myLot
let motorcycle
let car
let van

beforeAll(() => {
  myLot = new ParkingLot(6)
  motorcycle = new Vehicle(1)
  car = new Vehicle(2)
  van = new Vehicle(3)
  van2 = new Vehicle(3)
})

describe('ParkingLot', () => {
  it('should create a parking lot', () => {
    expect(myLot.spots.length).toEqual(6)
    expect(myLot.isLotEmpty()).toEqual(true)
  })

  it('should park a car', () => {
    myLot.park(car)
    expect(myLot.spots[0]).toEqual(car)
    expect(myLot.spots[1]).toEqual(car)
  })

  it('should park a van', () => {
    myLot.park(van)
    expect(myLot.spots[2]).toEqual(van)
    expect(myLot.spots[3]).toEqual(van)
    expect(myLot.spots[4]).toEqual(van)
  })

  it('should throw error when not enough space to park', () => {
    expect(() => myLot.park(van2)).toThrow(
      `Not enough space in lot for ${JSON.stringify(van2, null, 2)}`
    )
  })

  it('should park a motorcycle', () => {
    myLot.park(motorcycle)
    expect(myLot.spots[5]).toEqual(motorcycle)
  })

  it('should show lot is full', () => {
    expect(myLot.isLotFull()).toEqual(true)
  })

  it('should allow the van to leave', () => {
    myLot.leave(van)
    expect(myLot.spots[2]).toEqual(null)
    expect(myLot.spots[3]).toEqual(null)
    expect(myLot.spots[4]).toEqual(null)
  })

  it('should show lot is not full or empty', () => {
    expect(myLot.isLotFull()).toEqual(false)
    expect(myLot.isLotEmpty()).toEqual(false)
  })

  it('should allow the car to leave', () => {
    myLot.leave(car)
    expect(myLot.spots[0]).toEqual(null)
    expect(myLot.spots[1]).toEqual(null)
  })

  it('should allow the motorcycle to leave', () => {
    myLot.leave(motorcycle)
    expect(myLot.spots[5]).toEqual(null)
    expect(myLot.isLotEmpty()).toEqual(true)
  })
})
