'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('PetTypes', [
     { type: 'Bird', createdAt: new Date(), updatedAt: new Date() },
     { type: 'Cat', createdAt: new Date(), updatedAt: new Date() },
     { type: 'Dog', createdAt: new Date(), updatedAt: new Date() },
     { type: 'Elephant', createdAt: new Date(), updatedAt: new Date() },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PetTypes', {
      type: ['Bird', 'Cat', 'Dog', 'Elephant']
    })
  }
};
