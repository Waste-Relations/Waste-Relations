const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the search page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/search");
  });

  // Route for signing up a user.
  // The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model.
  // If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      console.log("user not logged in");
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Get all waste data
  app.get("/api/items", function(req, res) {
    db.WasteItem.findAll({}).then(function(result) {
      res.json(result).statusCode(200);
    });
  });
  //
  //item search
  app.post("/api/search", function(req, res) {
    db.WasteItem.findOne({ where: req.body }).then(queryResult => {
      res.json(queryResult.dataValues).statusCode(200);
    });
  });
  //
  app.get("/api/search", function(req, res) {
    db.WasteItem.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  //
  app.get("/api/search/:search", function(req, res) {
    db.WasteItem.findOne({ where: { name: req.params.search } }).then(
      queryResult => {
        res.json(queryResult.dataValues);
      }
    );
  });

  //add item route
  app.post("/api/items", function(req, res) {
    db.WasteItem.create(req.body).then(result => {
      res.json(result).statusCode(201);
    });
  });

  app.get("/api/dropoff", function(req, res) {
    db.DropOff.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/dropoff", function(req, res) {
    db.DropOff.create(req.body).then(result => {
      res.json(result);
    });
  });
  app.delete("/api/dropoff/delete", function(req, res) {
    db.DropOff.destroy({ where: { id: req.body.locationId } });
    res.sendStatus(204);
  });
  app.put("/api/dropoff/update", function(req, res) {
    db.DropOff.update(
      {
        organisation: req.body.organisation,
        postalCode: req.body.postalCode,
        thoroughFare: req.body.thoroughFare
      },
      {
        where: { id: req.body.locationId }
      }
    ).then(function() {
      res.sendStatus(204);
    });
  });
};
