/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_formacao_idioma_usuario', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    co_idioma: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    nv_leitura: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    nv_escrita: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    nv_fala: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'cao_formacao_idioma_usuario'
  });
};
