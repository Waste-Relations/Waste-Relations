'use strict';
module.exports = (sequelize, DataTypes) => {
  var WasteItem = sequelize.define('WasteItem', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    subCategory: DataTypes.STRING
  }, {});
  WasteItem.associate = function(models) {
    // associations can be defined here
  };
  return WasteItem;
};