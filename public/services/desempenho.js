app.factory('DesempenhoService', ['$http', function ($http) {
    var urlBase = "http://localhost:8080/";

    var getConsultors = function () {
        return $http.get(urlBase + "consultors");
    }
    var getDatosFaturaDesempenho = function (params) {
        return $http.post(urlBase + "dato_fatura_desempenho", params);
    }

    return {
        getConsultors: getConsultors,
        getDatosFaturaDesempenho: getDatosFaturaDesempenho
    };
}]);

