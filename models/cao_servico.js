/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_servico', {
    co_servico: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_servico: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_servico'
  });
};
