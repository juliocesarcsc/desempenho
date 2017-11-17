/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_bonus_status', {
    id: {
      type: DataTypes.INTEGER(128),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    data_solic: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    mes: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    valor: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    is_solic: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    is_pg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    is_horas: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'cao_bonus_status'
  });
};
