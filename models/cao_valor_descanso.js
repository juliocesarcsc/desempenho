/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_valor_descanso', {
    id: {
      type: DataTypes.INTEGER(40),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    segundos: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    mes_referencia: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_valor_descanso'
  });
};
