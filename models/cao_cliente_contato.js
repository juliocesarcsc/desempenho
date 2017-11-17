/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_cliente_contato', {
    co_cliente: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    dt_contato: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    fg_agendado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    hr_ini: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '00:00:00'
    },
    hr_end: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '00:00:00'
    }
  }, {
    tableName: 'cao_cliente_contato'
  });
};
