/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_tipo_ombudsman', {
    idtipo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_tipo_ombudsman'
  });
};
