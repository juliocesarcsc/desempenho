/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_help_motivo_chamado', {
    co_motivo: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_motivo: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_help_motivo_chamado'
  });
};
