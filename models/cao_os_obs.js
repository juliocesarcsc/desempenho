/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_obs', {
    co_obs: {
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
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: '0'
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dt_obs: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'cao_os_obs'
  });
};
