/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_usuario_dt_disp', {
    co_dt_disp: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dt_disp: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    dt_alt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'cao_usuario_dt_disp'
  });
};
