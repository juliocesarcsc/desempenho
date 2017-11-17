/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_help_status_chamado', {
    co_status: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_help_status_chamado'
  });
};
