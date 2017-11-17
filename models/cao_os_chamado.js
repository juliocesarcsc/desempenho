/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_chamado', {
    co_chamado: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_sistema: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    co_os: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    ds_chamado: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    co_tipo: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    co_prioridade: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    co_item: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ds_solucao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tempo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    dt_chamado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    co_analista: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cao_os_chamado'
  });
};
