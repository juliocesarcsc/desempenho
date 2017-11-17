/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_temp_import', {
    codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_temp_import'
  });
};
