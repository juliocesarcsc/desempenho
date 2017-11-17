/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_log_chamado', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_chamado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    dt_chamado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    co_usuario: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    co_daily: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_log_chamado'
  });
};
