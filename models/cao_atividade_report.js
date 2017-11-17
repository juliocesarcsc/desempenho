/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_atividade_report', {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_cliente: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    inicio: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fim: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    lembrete: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    co_atividade: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    co_os: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    assunto: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    tempo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    data_ativ: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    retorno: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    co_fase: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_atividade_report'
  });
};
