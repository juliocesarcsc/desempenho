/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_bonus', {
    bon_categoria: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bon_inicio: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bon_fim: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bon_valor_sem: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    bon_valor_fimsem: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'cao_bonus'
  });
};
