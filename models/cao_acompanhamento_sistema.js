/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_acompanhamento_sistema', {
    co_acompanhamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    tableName: 'cao_acompanhamento_sistema'
  });
};
