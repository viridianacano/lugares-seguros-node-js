'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('comments', 'statusDeLete',{
      type: Sequelize.BOOLEAN,
      defaultValue: false,

    });
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("comments","statusDeLete",{
      type: Sequelize.BOOLEAN,
      defaultValue: false,
  });
},
};
