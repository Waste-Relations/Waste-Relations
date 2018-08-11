var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WasteTable.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome",
        examples: dbExamples
      });
    });
  });
  //
};
