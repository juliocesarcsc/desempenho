/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_cliente', {
    co_cliente: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_razao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_fantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_contato: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nu_telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nu_ramal: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    nu_cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    ds_endereco: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nu_numero: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    no_bairro: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    nu_cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    no_pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    co_ramo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    co_cidade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    co_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    ds_site: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_cargo_contato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tp_cliente: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ds_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    co_complemento_status: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    nu_fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ddd2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    telefone2: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'cao_cliente'
  });
};
