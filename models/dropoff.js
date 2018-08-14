"use strict";
module.exports = (sequelize, DataTypes) => {
  var DropOff = sequelize.define(
    "DropOff",
    {
     country: { //(validation --> always required, 2 character ISO code)
         type: STRING,
         validate: { len: 2 },
         defaultValue: "CA", // ISO-2 for Canada
         allowNull: false 
        }, 
     organisation: {
         type: STRING,
         allowNull: false
     },
     administrative_area: { //aka region/province/state (use ISO code when available: Ontario -> ON)
         type: STRING,
         defaultValue: "ON"
     }, 
     locality: {
         type: STRING,
         defaultValue: "TORONTO"
        },
     postal_code: {      //store without spacing (e.g.: M5S2P8)
         type: STRING,
         validate: {
             len: 6,
             isAlphanumeric: true,
            }
     }, 
     thorough_fare: { //aka street address
         type: STRING,
         allowNull: false
     },   
    },
    {}
  );
  // DropOff.associate = function(models) {
  //   // associations can be defined here
  // };
  return DropOff;
};


