/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_email', {
    co_email: {
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
    email: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: '0'
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '0'
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    co_cliente: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    ativo: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    ddd: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    tableName: 'cao_os_email'
  });
};
