/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_diary_report_consultor', {
    co_diary_report_consultor: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_movimento: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    co_atividade: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    ds_empresa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ds_assunto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dt_agendamento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    dt_agendamento_fim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vl_fechamento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    co_cliente: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'cao_diary_report_consultor'
  });
};
