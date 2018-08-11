"use strict";
const data = require("./output.js");
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("wasteitems", data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("wasteitems", null, {});
  }
};

// eslint didn't link this caz Sequelize is not used.
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert("wasteitems", data, {});
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete("wasteitems", null, {});
//   }
// };
