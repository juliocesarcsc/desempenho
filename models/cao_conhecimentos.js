/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_conhecimentos', {
    idconhecimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    assunto: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    conhecimento: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'cao_usuario',
        key: 'co_usuario'
      }
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'cao_conhecimentos'
  });
};
