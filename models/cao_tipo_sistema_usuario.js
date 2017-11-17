/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_tipo_sistema_usuario', {
    co_sistema: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_sistema: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'cao_tipo_sistema_usuario'
  });
};
