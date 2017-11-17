/**
 * Created by Julio on 09-11-17.
 */
//Register the models
'use strict'

var model = {};
//Models
model.PermissaoSistema = require('../models/permissao_sistema')(myApp.db, Sequelize);
model.CaoUsuario = require('../models/cao_usuario')(myApp.db, Sequelize);
model.CaoFatura = require('../models/cao_fatura')(myApp.db, Sequelize);
model.CaoSalario = require('../models/cao_salario')(myApp.db, Sequelize);
//Relations

myApp.model = model;
