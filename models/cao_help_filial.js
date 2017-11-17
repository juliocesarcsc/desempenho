/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_help_filial', {
    co_filial: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_filial: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ''
    },
    co_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    estado: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_help_filial'
  });
};
