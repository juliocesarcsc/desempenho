var ctrl = {
    get_dato_fatura_desempenho: function (req, res) {
        var self = this;
        var moment = require('moment');
        var sql_query = "SELECT cu.co_usuario, MONTH(cf.data_emissao) as month, YEAR(cf.data_emissao) as year, " +
            "cu.no_usuario, sum(cf.valor - (cf.valor*cf.total_imp_inc/100)) as receita_liquida, " +
            "sum((cf.valor - (cf.valor * cf.total_imp_inc/100))*cf.comissao_cn/100) as comissao, " +
            "(SELECT AVG(brut_salario) FROM cao_salario) as cuxto_fijo_medio " +
            "FROM  cao_fatura cf " +
            "inner join cao_os co on cf.co_os=co.co_os " +
            "inner join cao_usuario cu on co.co_usuario=cu.co_usuario where (";
        req.body.consultorsQuery.forEach(function (el, index) {
            if (index > 0) {
                sql_query += " or "
            }
            sql_query += "cu.co_usuario='" + el.co_usuario + "' ";
        });

        var fechaIni = moment(req.body.fechaIni, "YYYY-MM-DD").startOf('month').format();
        var fechaFin = moment(req.body.fechaFin, "YYYY-MM-DD").endOf('month').format();
        sql_query += ") and cf.data_emissao between '" + fechaIni + "' and '" + fechaFin + "'";
        sql_query += " group by cu.co_usuario, cu.no_usuario, MONTH(cf.data_emissao), YEAR(cf.data_emissao)";
        sql_query += " order by cu.co_usuario, YEAR(cf.data_emissao), MONTH(cf.data_emissao)";
        myApp.db.query(sql_query)
            .spread(function (data_desempenho) {
                myApp.model.CaoSalario.findAll()
                    .then(function (data_salario) {
                        var format_relatorio_data = ctrl.format_relatorio_data(data_desempenho, data_salario);
                        var format_grafico_data = ctrl.format_grafico_data(req.body.periods, data_desempenho, format_relatorio_data.datos);
                        res.status(200).json({
                            relatorio: format_relatorio_data,
                            grafico: format_grafico_data
                        });
                    })
                    .catch(function (error) {
                        res.status(500).json(error);
                    })
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    },
    format_relatorio_data: function (data_desempenho, data_salario) {
        var moment = require('moment');
        var result = {datos: [], receita_liquida_total: 0, cuxto_fijo_medio: 0};
        data_desempenho.forEach(function (data_user) {
            var user = result.datos.find(function (result_user) {
                return result_user.co_usuario && result_user.co_usuario == data_user.co_usuario;
            });
            var salario_usuario = data_salario.find(function (el) {
                return el.co_usuario == data_user.co_usuario;
            });

            var brut_salario = salario_usuario ? salario_usuario.brut_salario : 0,
                minus = data_user.month < 10 ? '-0' : '-';

            var data_fatura = {
                month: data_user.month,
                year: data_user.year,
                fecha: moment(data_user.year + minus + data_user.month + '-01').format(),
                receita_liquida: data_user.receita_liquida,
                comissao: data_user.comissao,
                lucro: data_user.receita_liquida - data_user.comissao
            };
            if (!user) {
                result.datos.push({
                    co_usuario: data_user.co_usuario,
                    no_usuario: data_user.no_usuario,
                    cuxto_fijo: brut_salario,
                    cuxto_fijo_medio: data_user.cuxto_fijo_medio,
                    receita_liquida_total: 0,
                    comissao_total: 0,
                    cuxto_fijo_total: 0,
                    lucro_total: 0,
                    periods: [data_fatura]
                });
            } else {
                user.periods.push(data_fatura);
            }
        });
        result.datos.forEach(function (el) {
            el.periods.forEach(function (period) {
                result.receita_liquida_total += period.receita_liquida;
                el.receita_liquida_total += period.receita_liquida;
                el.comissao_total += period.comissao;
                el.lucro_total += period.lucro;
                el.cuxto_fijo_total += el.cuxto_fijo;
            });
        });
        return result;
    },
    format_grafico_data: function (periodsResult, data_desempenho, relatorio_data) {
        var periods = periodsResult.data;
        //var sameYear = periodsResult.sameYear;
        //var firstPeriod = periods[0];
        //var lastPeriod = periods[periods.length - 1];
        //vm.graficoDataSource.chart.subcaption = firstPeriod.monthName
        //    + " de " + firstPeriod.year + " a "
        //    + lastPeriod.monthName + " de " + lastPeriod.year;
        //
        //periods.forEach(function (period) {
        //    var category = {
        //        label: sameYear ? period.monthName : period.monthName + "-" + period.year
        //    }
        //    vm.graficoDataSource.categories[0].category.push(category);
        //});
        var dataset = [];

        relatorio_data.forEach(function (user, i, arr) {
            var serie = {
                "seriesname": user.no_usuario,
                "data": []
            };
            var serieCuxtoFijo = {
                "seriesname": "Cuxto Fijo Medio",
                "renderas": "line",
                "showvalues": "0",
                "data": []
            };

            periods.forEach(function (prd) {
                var userPeriod = data_desempenho.find(function (el) {
                    return el.month == prd.month && el.year == prd.year && el.co_usuario == user.co_usuario;
                });
                var serieDato = {value: userPeriod ? userPeriod.receita_liquida.toFixed(2) : 0};
                serie.data.push(serieDato);
                if (i == arr.length - 1) {
                    serieDato = {value: user.cuxto_fijo_medio.toFixed(2)}
                    serieCuxtoFijo.data.push(serieDato);
                }
            });
            dataset.push(serie);
            if (i == arr.length - 1) {
                dataset.push(serieCuxtoFijo);
            }

        });
        return dataset;
    }
};
exports.ctrl = ctrl;