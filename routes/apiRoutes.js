var db = require("../models");

module.exports = function(app) {
  // Get all waste data
  app.get("/api/examples", function(req, res) {
    db.WasteItem.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  //
};
