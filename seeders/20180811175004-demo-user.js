'use strict';
const data = require('/Users/andretorquati/Desktop/Waste-Relations/models/output.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WasteTable', data, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WasteTable', null, {});
  }
};
