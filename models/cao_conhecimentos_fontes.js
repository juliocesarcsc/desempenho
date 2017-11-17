/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_conhecimentos_fontes', {
    idfonte: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idconhecimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'cao_conhecimentos',
        key: 'idconhecimento'
      }
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    arquivo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    caminho: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_conhecimentos_fontes'
  });
};
