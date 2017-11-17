/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_complemento', {
    co_complemento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_complemento: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'cao_complemento'
  });
};
