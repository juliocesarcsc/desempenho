/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_feriados', {
    dia: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    mes: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    ano: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_feriados'
  });
};
