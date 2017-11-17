'use strict';
module.exports = function (app) {
    app.route('/permissao_sistema')
        .get(myApp.controllers.permissao_sistema.index)
        .post(myApp.controllers.permissao_sistema.create);


    app.route('/permissao_sistema/:co_usuario')
        .get(myApp.controllers.permissao_sistema.show)
        .put(myApp.controllers.permissao_sistema.update)
        .delete(myApp.controllers.permissao_sistema.delete);
};