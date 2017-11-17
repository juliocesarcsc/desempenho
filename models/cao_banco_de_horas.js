/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_banco_de_horas', {
    id: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    data_cadastro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    segundos: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      defaultValue: '0'
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_banco_de_horas'
  });
};
