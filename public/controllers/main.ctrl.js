app.controller('MainCtrl', function MainCtrl($scope, $location, $anchorScroll, Toast, DesempenhoService, staticData, util) {
    var vm = this;


    vm.sampleAction = sampleAction;
    function sampleAction(name) {
        Toast.show(name + ' Action', 'top right', 3000);
    };
});