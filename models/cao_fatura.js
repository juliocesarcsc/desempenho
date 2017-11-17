/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_fatura', {
    co_fatura: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_cliente: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    co_sistema: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    num_nf: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    data_emissao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    corpo_nf: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comissao_cn: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    total_imp_inc: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_fatura'
  });
};
