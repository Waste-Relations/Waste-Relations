"use strict";
const data = require("./output.js");
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("WasteItems", data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("WasteItems", null, {});
  }
};
