app.factory('util', function ($rootScope, $http, $q) {
    return {
        request: function (options) {
            var deferred = $q.defer();
            if (options.method)
                eval('$http.' + options.method + '("/zunsa/"+options.url,' + JSON.stringify(options.data) + ')' +
                    '.then(function (response) {' +
                    'deferred.resolve(response.data);' +
                    '})' +
                    '.catch(function (error) {' +
                    ' deferred.reject(error);' +
                    '});'
                );
            else eval('$http.get("/zunsa/"+options.url,' + JSON.stringify(options.data) + ')' +
                '.then(function (response) {' +
                ' deferred.resolve(response.data);' +
                '})' +
                '.catch(function (error) {' +
                ' deferred.reject(error);' +
                '});'
            );
            return deferred.promise;
        },
    }
})