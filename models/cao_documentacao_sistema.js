/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_documentacao_sistema', {
    id: {
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pasta: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    sub_grupo: {
      type: DataTypes.INTEGER(20),
      allowNull: true
    },
    co_usuario: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    dt_doc: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    arquivo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_documentacao_sistema'
  });
};
