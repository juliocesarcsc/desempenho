/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_conhecimento_usuario', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    co_conhecimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    nv_conhecimento: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    is_certificado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cao_conhecimento_usuario'
  });
};
