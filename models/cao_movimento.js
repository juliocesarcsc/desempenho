/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_movimento', {
    co_movimento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    dt_entrada: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    dt_saida_almoco: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    dt_volta_almoco: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    dt_saida: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    is_encerrado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_movimento'
  });
};
