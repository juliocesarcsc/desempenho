/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_formacao_usuario', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    tp_curso: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    ds_curso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_instituicao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dt_conclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'cao_formacao_usuario'
  });
};
