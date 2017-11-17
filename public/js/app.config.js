/**
 * Created by Julio on 09-11-17.
 */
app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise(function () {
        return '/';
    });

    var commonState = {
        name: 'common',
        abstract: true,
        templateUrl: '../view/main.html',
        controller: 'MainCtrl as ctrl'
    }, homeState = {
        name: 'home',
        url: '/',
        templateUrl: '../view/main.html',
        controller: 'MainCtrl as ctrl'
    }, desempenhoState = {
        name: 'common.desempenho',
        url: '/desempenho',
        templateUrl: '../view/desempenho/desempenho_main.html'
    }

    $stateProvider
        .state(commonState)
        .state(homeState)
        .state(desempenhoState);
});