/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_help_autor', {
    co_autor: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_autor: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '0'
    },
    co_filial: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    nu_ddd1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nu_tel1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nu_ramal1: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    nu_ddd2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nu_tel2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nu_ramal2: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_funcao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cao_help_autor'
  });
};
