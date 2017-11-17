/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_uf', {
    co_uf: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_uf: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_uf'
  });
};
