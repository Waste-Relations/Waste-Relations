const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WasteItem.findAll({}).then(function() {
      res.render("index");
    });
  });
  //
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // app.get("/search", function(req, res) {
  //   // If the user already has an account send them to the search page
  //   req.user ? res.render("search") : res.render("index");
  // });

  app.get("/result", function(req, res) {
    // If the user already has an account send them to the result page
    req.user ? res.render("result") : res.render("index");
  });

  app.get("/map", function(req, res) {
    // If the user already has an account send them to the map page
    req.user ? res.render("map") : res.render("index");
  });

  app.get("/profile", function(req, res) {
    // If the user already has an account send them to the profile page
    req.user ? res.render("profile") : res.render("index");
  });

  app.get("/pickup", function(req, res) {
    // If the user already has an account send them to the pickup page
    req.user ? res.render("pickup") : res.render("index");
  });

  app.get("/donation", function(req, res) {
    // If the user already has an account send them to the donation page
    req.user ? res.render("donation") : res.render("index");
  });

  app.get("/charity", function(req, res) {
    // If the user already has an account send them to the charity page
    req.user ? res.render("charity") : res.render("index");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/search", isAuthenticated, function(req, res) {
    res.render("search");
    // res.sendFile(path.join(__dirname, "../public/search.html"));
  });
};
