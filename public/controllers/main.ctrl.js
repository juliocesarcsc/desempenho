app.controller('MainCtrl', function MainCtrl($scope, Toast) {
    var vm = this;

    vm.sampleAction = sampleAction;
    function sampleAction(name) {
        Toast.show(name + ' Action', 'top right', 3000);
    };
});