'use strict';
module.exports = function (app) {
    require('../routes/index')(app);
    require('../routes/permissao_sistema')(app);
    require('../routes/cao_usuario')(app);
    require('../routes/cao_fatura')(app);
    require('../routes/cao_salario')(app);
};