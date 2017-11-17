/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_os', {
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nu_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    co_sistema: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0'
    },
    co_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    co_arquitetura: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    ds_os: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: '0'
    },
    ds_caracteristica: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: '0'
    },
    ds_requisito: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    co_status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    diretoria_sol: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    dt_sol: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nu_tel_sol: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '0'
    },
    ddd_tel_sol: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nu_tel_sol2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ddd_tel_sol2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    usuario_sol: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    dt_imp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_garantia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    co_email: {
      type: DataTypes.INTEGER(30),
      allowNull: true
    },
    co_os_prospect_rel: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'cao_os'
  });
};
