/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_obs_sistema', {
    co_obs: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dt_obs: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cao_obs_sistema'
  });
};
