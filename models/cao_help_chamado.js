/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_help_chamado', {
    co_chamado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_chamado: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ds_solucao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    co_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    co_motivo: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    co_tela: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    co_autor: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    co_filial: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    co_sistema: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    dt_chamado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    dt_solucao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'cao_help_chamado'
  });
};
