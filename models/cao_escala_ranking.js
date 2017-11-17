/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_escala_ranking', {
    idescala: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qtd_visual: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    pontuacao: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_escala_ranking'
  });
};
