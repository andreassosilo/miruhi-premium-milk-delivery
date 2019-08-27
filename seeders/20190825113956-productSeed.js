'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const initialData = [
      {
        name: 'Plain 1L',
        price: 40000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chocolate 1L',
        price: 45000,
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Strawberry 1L',
        price: 45000,
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Products', initialData, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
