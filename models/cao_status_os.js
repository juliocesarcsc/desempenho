/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_status_os', {
    co_status_atual: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_status_os'
  });
};
