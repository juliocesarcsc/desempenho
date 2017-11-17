/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_prazo', {
    co_prazo: {
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
    co_fase: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    total_analista: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    total_hora: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_os_prazo'
  });
};
