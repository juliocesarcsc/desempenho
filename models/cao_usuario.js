/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_usuario', {
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    no_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    ds_senha: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ''
    },
    co_usuario_autorizacao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nu_matricula: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    dt_admissao_empresa: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    dt_desligamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_inclusao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    dt_expiracao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    nu_cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    nu_rg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    no_orgao_emissor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    uf_orgao_emissor: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ds_endereco: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    no_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    no_email_pessoal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nu_telefone: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    dt_alteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instant_messenger: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    icq: {
      type: DataTypes.INTEGER(13).UNSIGNED,
      allowNull: true
    },
    msn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    yms: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_comp_end: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nu_cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    no_cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uf_cidade: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    dt_expedicao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'cao_usuario'
  });
};
