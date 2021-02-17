'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menuItems', [{
      title: 'Original',
      price: 1.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Original Du',
      price: 1.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menuItems', null, {});
  }
};
