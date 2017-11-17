/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_custo', {
    co_custo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_tipo_custo: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '0'
    },
    co_escritorio: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    dt_compra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    co_boleto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    parcela: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pag: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    co_custo_high: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_custo'
  });
};
