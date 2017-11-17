/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_ramo', {
    co_ramo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_ramo: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_ramo'
  });
};
