/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_status', {
    co_status_atual: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_status: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_os_status'
  });
};
