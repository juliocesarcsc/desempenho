/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_analista', {
    co_analista: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_os_analista'
  });
};
