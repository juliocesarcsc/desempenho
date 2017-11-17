/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os_fase', {
    co_fase: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: '0'
    },
    descricao_ingl: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    ordem: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'cao_os_fase'
  });
};
