app.factory('Toast', ['$mdToast', function ($mdToast) {
    return {
        show: function (text, position, delay) {
            $mdToast.show(
                $mdToast.simple()
                    .content(text)
                    .position(position)
                    .hideDelay(delay)
            );
        }
    };
}]);
