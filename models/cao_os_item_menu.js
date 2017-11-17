/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_item_menu', {
    co_item: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_item: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    co_sistema: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_os_item_menu'
  });
};
