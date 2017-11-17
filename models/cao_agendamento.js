/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_agendamento', {
    co_agendamento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dt_hr_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    dt_hr_fim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    co_status_agendamento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    co_diary_report_consultor: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    co_complemento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_agendamento'
  });
};
