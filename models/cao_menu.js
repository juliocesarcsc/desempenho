/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_menu', {
    co_menu: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_menu: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    ds_pagina: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cao_menu'
  });
};
