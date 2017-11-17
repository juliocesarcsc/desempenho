/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_tipo_idioma_usuario', {
    co_idioma: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_idioma: {
      type: DataTypes.STRING(13),
      allowNull: true
    }
  }, {
    tableName: 'cao_tipo_idioma_usuario'
  });
};
