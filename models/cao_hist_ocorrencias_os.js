/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_hist_ocorrencias_os', {
    idocorrencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_os: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      references: {
        model: 'cao_os',
        key: 'co_os'
      }
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'cao_usuario',
        key: 'co_usuario'
      }
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM('Interna','Externa'),
      allowNull: false,
      defaultValue: 'Interna'
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    responsavel: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    data_fechamento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cao_hist_ocorrencias_os'
  });
};
