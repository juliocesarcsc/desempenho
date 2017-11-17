/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_status_agendamento', {
    co_status_agendamento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_status_agendamento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_status_agendamento'
  });
};
