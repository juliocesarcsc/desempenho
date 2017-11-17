/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_noticia', {
    co_noticia: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    assunto: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    co_usuario: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    dt_noticia: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'cao_noticia'
  });
};
