var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WasteItem.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome",
        examples: dbExamples
      });
    });
  });
  //
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/search", function(req, res) {
    res.render("search");
  });

  app.get("/result", function(req, res) {
    res.render("result");
  });

  app.get("/map", function(req, res) {
    res.render("map");
  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  app.get("/pickup", function(req, res) {
    res.render("pickup");
  });

  app.get("/donation", function(req, res) {
    res.render("donation");
  });

  app.get("/charity", function(req, res) {
    res.render("charity");
  });
};
