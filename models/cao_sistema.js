/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_sistema', {
    co_sistema: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_cliente: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    co_arquitetura: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    no_sistema: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_sistema_resumo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ds_caracteristica: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ds_requisito: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no_diretoria_solic: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ddd_telefone_solic: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nu_telefone_solic: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    no_usuario_solic: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dt_solicitacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    co_email: {
      type: DataTypes.INTEGER(30),
      allowNull: true
    }
  }, {
    tableName: 'cao_sistema'
  });
};
