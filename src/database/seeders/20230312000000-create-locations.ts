import { QueryInterface } from 'sequelize'

const locationZero = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Nyabugogo',
  latitude: -1.939826787816454,
  longitude: 30.0445426438232,
}

const locationOne = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Kimironko',
  latitude: -1.9365670876910166,
  longitude: 30.13020167024439
}
const locationTwo = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Remera',
  latitude: -1.9647362028782875,
  longitude: 30.148948779461183,
}

const locationThree = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Gatenga',
  latitude: -1.951542,
  longitude: 30.109847,
}
const locationFour = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Kicukiro', 
  latitude: -1.984046,
  longitude: 30.104083
}

const locationFive = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Kacyiru',
  latitude:-1.9333928457956164,
  longitude: 30.074104973186625,
}

const locationSix = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Ndera',
  latitude: -1.9470657791624806,
  longitude: 30.17314183704839
}
const locationSeven = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Gisozi',
  latitude: -1.914807242342474,
  longitude: 30.06444467577999,
}

const locationEight = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Nyanza',
  latitude: -1.983325329359245,
  longitude: 30.102497586212607,
}
const locationNine = {
  createdAt: new Date(),
  updatedAt: new Date(),
  location_name: 'Gikondo',
  latitude: -1.969238075384687,
  longitude: 30.072066497173488,
}

const up = (queryInterface: QueryInterface) => queryInterface.bulkInsert('locations', [locationZero, locationOne, locationTwo, locationThree, locationFour, locationFive, locationSix, locationSeven, locationEight, locationNine])
const down = (queryInterface: QueryInterface) => queryInterface.bulkDelete('locations', [], {})
export { up, down }