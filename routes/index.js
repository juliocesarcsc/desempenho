'use strict';
module.exports = function (app) {
    app.route('/')
        .get(myApp.controllers.main.index);
};