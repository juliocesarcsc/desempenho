/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_participacao_funcionario', {
    co_part_funcionario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pc_participacao: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    co_escritorio: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    dt_referencia: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'cao_participacao_funcionario'
  });
};
