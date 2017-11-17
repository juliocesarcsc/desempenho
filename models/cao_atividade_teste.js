/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_atividade_teste', {
    co_atividade: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_atividade: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    co_tipo_usuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_atividade_teste'
  });
};
