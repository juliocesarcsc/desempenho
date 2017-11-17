/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_boleto', {
    co_boleto: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_cliente: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: '0'
    },
    co_sistema: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: '0'
    },
    co_os: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: '0'
    },
    valor: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    vencimento: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      defaultValue: '0'
    },
    boleto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linha_dig: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parcela: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'cao_boleto'
  });
};
