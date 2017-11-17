/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_pontos_conhecimento', {
    idpontos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pontuacao: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'cao_escala_ranking',
        key: 'idescala'
      }
    },
    co_coordenador: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'cao_usuario',
        key: 'co_usuario'
      }
    },
    idconhecimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'cao_conhecimentos',
        key: 'idconhecimento'
      }
    }
  }, {
    tableName: 'cao_pontos_conhecimento'
  });
};
