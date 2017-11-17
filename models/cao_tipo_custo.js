/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_tipo_custo', {
    co_tipo_custo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_tipo_custo'
  });
};
