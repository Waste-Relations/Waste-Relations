"use strict";
module.exports = (sequelize, DataTypes) => {
  var DropOff = sequelize.define(
    "DropOff",
    {
      country: {
        //(validation --> always required, 2 character ISO code)
        type: DataTypes.STRING,
        validate: { len: 2 },
        defaultValue: "CA", // ISO-2 for Canada
        allowNull: false
      },
      organisation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      administrativeArea: {
        //aka region/province/state (use ISO code when available: Ontario -> ON)
        type: DataTypes.STRING,
        defaultValue: "ON"
      },
      locality: {
        type: DataTypes.STRING,
        defaultValue: "TORONTO"
      },
      postalCode: {
        //store without spacing (e.g.: M5S2P8)
        type: DataTypes.STRING,
        validate: {
          len: 6,
          isAlphanumeric: true
        }
      },
      thoroughFare: {
        //aka street address
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  // DropOff.associate = function(models) {
  //   // associations can be defined here
  // };
  return DropOff;
};
