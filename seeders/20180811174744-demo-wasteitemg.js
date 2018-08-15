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
