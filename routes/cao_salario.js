'use strict';
module.exports = function (app) {
    app.route('/salario')
        .get(myApp.controllers.cao_salario.index);
    app.route('/salario/:co_usuario')
        .get(myApp.controllers.cao_salario.show);
    app.route('/cuxto_fijo_medio')
        .get(myApp.controllers.cao_salario.get_cuxto_fijo_medio);
};