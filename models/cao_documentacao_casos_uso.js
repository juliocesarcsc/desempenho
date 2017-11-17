/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_documentacao_casos_uso', {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ''
    },
    co_sistema: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_documentacao_casos_uso'
  });
};
