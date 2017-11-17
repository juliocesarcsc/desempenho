/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_salario', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    dt_alteracao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00',
      primaryKey: true
    },
    brut_salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    liq_salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_salario'
  });
};
