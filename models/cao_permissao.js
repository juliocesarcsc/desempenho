/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_permissao', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'cao_usuario',
        key: 'co_usuario'
      }
    },
    permissao_intervalo: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    },
    permissao_hora_extra: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_permissao'
  });
};
