'use strict';
const data = require("./output.js");
module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('wasteitems', data,{});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('wasteitems', null, {});

  }
};

//