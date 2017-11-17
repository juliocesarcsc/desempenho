/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_atividade_consultor', {
    co_atividade: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_atividade: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    ativo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'cao_atividade_consultor'
  });
};
