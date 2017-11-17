/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_arquitetura_os', {
    co_arquitetura: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ds_arquitetura: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_arquitetura_os'
  });
};
