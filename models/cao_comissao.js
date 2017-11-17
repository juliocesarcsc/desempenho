/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_comissao', {
    co_comissao: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_fatura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    dt_efetuado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'cao_comissao'
  });
};
