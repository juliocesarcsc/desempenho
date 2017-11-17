/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_ombudsman', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idtipo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'cao_tipo_ombudsman',
        key: 'idtipo'
      }
    },
    idcategoria: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'cao_categorias_ombudsman',
        key: 'idcategoria'
      }
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    co_escritorio: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cao_ombudsman'
  });
};
