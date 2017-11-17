/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_diary_report', {
    co_diary_report: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hr_gasta: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '00:00:00'
    },
    co_atividade: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    ds_assunto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    co_movimento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    nu_os: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'cao_diary_report'
  });
};
