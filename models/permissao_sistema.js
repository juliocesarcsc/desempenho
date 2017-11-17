/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissao_sistema', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    co_tipo_usuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    in_ativo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'S'
    },
    co_usuario_atualizacao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dt_atualizacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'permissao_sistema'
  });
};
