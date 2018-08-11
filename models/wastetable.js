module.exports = function(sequelize, DataTypes) {
  var WasteTable = sequelize.define("WasteTable", {
    category: DataTypes.TEXT,
    name: DataTypes.TEXT,
    subCategory: DataTypes.TEXT
  });
  return WasteTable;
};
