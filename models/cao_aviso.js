/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_aviso', {
    co_aviso: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_aviso: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'cao_aviso'
  });
};
