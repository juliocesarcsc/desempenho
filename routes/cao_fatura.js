'use strict';
module.exports = function (app) {
    app.route('/dato_fatura_desempenho')
        .get(myApp.controllers.cao_fatura.get_dato_fatura_desempenho)
        .put(myApp.controllers.cao_fatura.get_dato_fatura_desempenho)
        .post(myApp.controllers.cao_fatura.get_dato_fatura_desempenho);
};
