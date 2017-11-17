/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_horario_almoco', {
    co_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    almoco_saida_hora: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '0'
    },
    almoco_volta_hora: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_horario_almoco'
  });
};
