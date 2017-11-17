/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_movimento_justificativa', {
    co_movimento_justificativa: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_movimento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    nu_os: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    ds_justificativa: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'cao_movimento_justificativa'
  });
};
