/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_movimento_os', {
    co_movimento_os: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nu_os: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    co_tipo_movimento: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nu_valor: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ds_valor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usuario_obs: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dt_ini: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dt_fim: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cao_movimento_os'
  });
};
