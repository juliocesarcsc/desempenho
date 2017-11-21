(function () {
    app.service('util', util);
    util.$inject = ['$mdDialog'];
    function util($mdDialog) {

        return {
            hideWait: hideWait,
            showWait: showWait
        }

        function hideWait() {
            setTimeout(function () {
                $mdDialog.cancel();
            }, 5);
        }

        function showWait() {
            $mdDialog.show({
                    template: '<md-dialog id="plz_wait" style="background-color:transparent;box-shadow:none">' +
                    '<div layout="row" layout-sm="column" layout-align="center center" style="overflow: hidden">' +
                    '<md-progress-circular md-mode="indeterminate" class="md-accent md-hue-3" ></md-progress-circular>' +
                    '</div>' +
                    '</md-dialog>',
                    parent: angular.element(document.body),
                    clickOutsideToClose: false,
                    fullscreen: false
                })
                .then(function (answer) {

                });
        }

    }
})();