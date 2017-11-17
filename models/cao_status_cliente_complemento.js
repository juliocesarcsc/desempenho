/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_status_cliente_complemento', {
    co_complemento_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    co_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cao_status_cliente_complemento'
  });
};
