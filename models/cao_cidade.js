/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_cidade', {
    co_cidade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_cidade: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    co_uf: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_cidade'
  });
};
