/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_categorias_ombudsman', {
    idcategoria: {
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
    tableName: 'cao_categorias_ombudsman'
  });
};
