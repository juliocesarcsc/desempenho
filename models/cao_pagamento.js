/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cao_pagamento', {
    co_pagamento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    co_usuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    tp_pagamento: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '0'
    },
    dt_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    vl_pagamento: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    dt_referencia_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'cao_pagamento'
  });
};
