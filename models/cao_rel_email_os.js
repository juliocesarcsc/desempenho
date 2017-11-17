/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_rel_email_os', {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_email: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    co_os: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_rel_email_os'
  });
};
