/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_menu_contador', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    co_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    nu_pontos: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    in_processado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_menu_contador'
  });
};
