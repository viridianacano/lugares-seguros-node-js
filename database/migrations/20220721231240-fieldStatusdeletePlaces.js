'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("places","statusDeLete",{
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      
    });
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn("places","statusDeLete");
  },
};
