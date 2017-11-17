/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_usuario', {
    co_tipo_usuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ds_tipo_usuario: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'tipo_usuario'
  });
};
