exports.ctrl = {
    // Get receita líquida
    index: function (req, res) {
        myApp.model.CaoSalario.findAll()
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    },
    //Get an CaoSalario by the unique ID using model.findById()
    show: function (req, res) {
        myApp.model.CaoSalario.findById(req.params.co_usuario)
            .then(function (permissao_sistema) {
                res.status(200).json(permissao_sistema);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    get_cuxto_fijo_medio: function (req, res) {
        myApp.db.query("SELECT AVG(brut_salario) as cuxto_fijo_medio FROM cao_salario")
            .spread(function (data) {
                res.status(200).json(data);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    }
}