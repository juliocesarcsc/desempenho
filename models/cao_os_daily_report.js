/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_daily_report', {
    co_daily: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0'
    },
    co_fase: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_assunto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tempo_gasto: {
      type: DataTypes.TIME,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    co_status_atual: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    co_chamado: {
      type: DataTypes.INTEGER(20),
      allowNull: true
    },
    co_atividade: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'cao_os_daily_report'
  });
};
