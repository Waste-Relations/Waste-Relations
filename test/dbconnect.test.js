// refer to setup files
/* eslint-disable */

var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

describe("Access to DB", function() {
  describe("#fail", function() {
    it("should return -1 because wrong credentials", function(done) {
      var connection = mysql.createConnection({
        host: "right host",
        user: "wrong user",
        password: "wrong password",
        database: "right database"
      });
      connection.connect(done);
    });
  });
});
