import { QueryInterface } from 'sequelize'

const busOne = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'KBS',
  available_sits: 90,
  driver_id: 1,
  route_id: 1,
  model: 'YUTONGO',
  plate_number: 'RCA 125 G'
}

const busTwo = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Stella',
  available_sits: 30,
  driver_id: 2,
  route_id: 1,
  model: 'XLiu',
  plate_number: 'RCA 125 E'
}

const busThree = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'XLiu',
  available_sits: 90,
  driver_id: 1,
  route_id: 2,
  model: 'XLiu',
  plate_number: 'RCG 115 F'
}

const busFour = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'YUTONGO',
  available_sits: 30,
  driver_id: 2,
  route_id: 2,
  model: 'XLiu',
  plate_number: 'RCB 393 X'
}

const busFive = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Horizon',
  available_sits: 90,
  driver_id: 3,
  route_id: 3,
  model: 'Toyota',
  plate_number: 'RCA 125 A'
}

const busSix = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Safari',
  driver_id: 4,
  route_id: 4,
  available_sits: 30,
  model: 'Toyota',
  plate_number: 'RCA 125 F'
}

const busSeven = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Volcano',
  driver_id: 5,
  route_id: 5,
  available_sits: 30,
  model: 'Honda',
  plate_number: 'RCA 125 C'

}

const busEight = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Volcano',
  driver_id: 6,
  route_id: 6,
  available_sits: 30,
  model: 'Honda',
  plate_number: 'RCA 129 C'

}

const up = (queryInterface: QueryInterface) => queryInterface.bulkInsert('buses', [busOne, busTwo, busThree, busFour, busFive, busSix, busSeven, busEight])
const down = (queryInterface: QueryInterface) => queryInterface.bulkDelete('buses', [], {})
export { up, down }
