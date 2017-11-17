/**
 * Created by Julio on 09-11-17.
 */
//Register the controllers
'use strict'

var controllers = {};
//Models
controllers.main = require('../controllers/main').ctrl;
controllers.permissao_sistema = require('../controllers/permissao_sistema').ctrl;
controllers.cao_usuario = require('../controllers/cao_usuario').ctrl;
controllers.cao_fatura = require('../controllers/cao_fatura').ctrl;
controllers.cao_salario = require('../controllers/cao_salario').ctrl;
//Relations


myApp.controllers = controllers;
