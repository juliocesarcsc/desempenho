'use strict';
module.exports = function (app) {
    app.route('/consultors')
        .get(myApp.controllers.cao_usuario.get_consultors);

    app.route('/cao_usuario')
        .get(myApp.controllers.cao_usuario.index)
        .post(myApp.controllers.cao_usuario.create);

    app.route('/cao_usuario/:co_usuario')
        .get(myApp.controllers.cao_usuario.show)
        .put(myApp.controllers.cao_usuario.update)
        .delete(myApp.controllers.cao_usuario.delete);
};