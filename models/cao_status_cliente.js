/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_status_cliente', {
    co_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_status_cliente'
  });
};
