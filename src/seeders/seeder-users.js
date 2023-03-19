'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password:'123456',
      firstName: 'Huynh',
      lastName: 'Van De',
      address: 'Quan 4 Ho Chi Minh',
      gender: 1,
      image:"https://anhdep.com",
      phoneNumber: '0828983419',
      roleId: 'R1',
      positionId: 'Bac si',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
