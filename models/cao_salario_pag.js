/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_salario_pag', {
    id_pagamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'cao_usuario',
        key: 'co_usuario'
      }
    },
    dt_efetuado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    status: {
      type: DataTypes.ENUM('Autorizado','Pago','Pendente'),
      allowNull: false,
      defaultValue: 'Pendente'
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'cao_salario_pag'
  });
};
