/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_obs_cliente', {
    co_obs: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ''
    },
    co_cliente: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ''
    },
    dt_obs: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'cao_obs_cliente'
  });
};
