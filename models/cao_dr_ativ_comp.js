/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_dr_ativ_comp', {
    id_ativ_comp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    assunto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tempo_gasto: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    }
  }, {
    tableName: 'cao_dr_ativ_comp'
  });
};
