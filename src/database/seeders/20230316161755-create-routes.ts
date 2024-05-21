import { QueryInterface  } from 'sequelize'

const routeZero = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Nyabugogo - Kimironko',
  start: 1,
  end: 2,
  stops: [1,2,3,4,5],
  way_points: [2]
}

const routeOne = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Kimironko - Nyabugogo',
  start: 2,
  end: 1,
  stops: [1,2],
  way_points: [2]
}

const routetwo = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Kimironko - Remera',
  start: 2,
  end: 3,
  stops: [1],
  way_points: [2]
}

const routethree = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Kimironko - Gikondo',
  start: 2,
  end: 9,
  stops: [1],
  way_points: [2]
}

const routefour = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Nyabugogo - Kicukiro',
  start: 1,
  end: 5,
  stops: [1],
  way_points: [2]
}

const routefive = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Kimironko - ndera',
  start: 2,
  end: 7,
  stops: [1],
  way_points: [1]
}

const routeSix = {
  createdAt: new Date(),
  updatedAt: new Date(),
  route_name: 'Nyabugogo - Remera',
  start: 1,
  end: 3,
  stops: [1],
  way_points: [1]
}
  
const up = (queryInterface: QueryInterface) => queryInterface.bulkInsert('routes', [routeZero, routeOne, routetwo, routethree, routefour, routefive, routeSix])
const down = (queryInterface: QueryInterface) => queryInterface.bulkDelete('routes', [], {})
export { up, down }