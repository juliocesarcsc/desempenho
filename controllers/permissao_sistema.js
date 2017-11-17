exports.ctrl = {
    index: function (req, res) {
        myApp.model.PermissaoSistema.findAll()
            .then(function (permissao_sistemas) {
                res.status(200).json(permissao_sistemas);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    //Get an PermissaoSistema by the unique ID using model.findById()
    show: function (req, res) {
        myApp.model.PermissaoSistema.findById(req.params.id)
            .then(function (permissao_sistema) {
                res.status(200).json(permissao_sistema);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

//Create a new PermissaoSistema using model.create()
    create: function (req, res) {
        myApp.model.PermissaoSistema
            .findOrCreate({where: {unique_column: req.body.unique_column}, defaults: req.body})
            .spread(function (newPermissaoSistema, created) {
                if (created)
                    res.status(200).json(newPermissaoSistema);
                else
                    res.status(500).json({error: 'Ya existe un record con ese unique_column.'})
            })
    },

//Edit an existing PermissaoSistema details using model.update()
    update: function (req, res) {
        myApp.model.PermissaoSistema.update(req.body, {
                where: {
                    id_PermissaoSistema: req.params.id
                }
            })
            .then(function (updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

//Delete an existing PermissaoSistema by the unique ID using model.destroy()
    delete: function (req, res) {
        myApp.model.PermissaoSistema.destroy({
                where: {
                    id_PermissaoSistema: req.params.id
                }
            })
            .then(function (deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    }
}