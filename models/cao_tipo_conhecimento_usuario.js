/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_tipo_conhecimento_usuario', {
    co_conhecimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_conhecimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    co_sistema: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_tipo_conhecimento_usuario'
  });
};
