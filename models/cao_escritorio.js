/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_escritorio', {
    co_escritorio: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    local: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_escritorio'
  });
};
