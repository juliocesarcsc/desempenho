/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_help_tela_chamado', {
    co_tela: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    co_sistema: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ds_tela: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_help_tela_chamado'
  });
};
