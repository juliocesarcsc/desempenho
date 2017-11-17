exports.ctrl = {
    index: function (req, res) {
        myApp.model.CaoUsuario.findAll()
            .then(function (cao_usuarios) {
                res.status(200).json(cao_usuarios);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    //Get an PermissaoSistema by the unique ID using model.findById()
    show: function (req, res) {
        PermissaoSistemas.findById(req.params.id)
            .then(function (permissao_sistema) {
                res.status(200).json(permissao_sistema);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

//Create a new PermissaoSistema using model.create()
    create: function (req, res) {
        PermissaoSistemas
            .findOrCreate({where: {unique_column: req.body.unique_column}, defaults: req.body})
            .spread(function (newCaoUsuario, created) {
                if (created)
                    res.status(200).json(newCaoUsuario);
                else
                    res.status(500).json({error: 'Ya existe un record con ese unique_column.'})
            })
    },

//Edit an existing PermissaoSistema details using model.update()
    update: function (req, res) {
        PermissaoSistemas.update(req.body, {
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
        PermissaoSistemas.destroy({
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
    },

    // Get consultors
    get_consultors: function (req, res) {
        myApp.db.query("select * from cao_usuario cu inner join permissao_sistema ps " +
                "on cu.co_usuario = ps.co_usuario " +
                "where ps.co_sistema = 1 and ps.in_ativo='S' and " +
                "ps.co_tipo_usuario between 0 and 2")
            .spread(function (consultors) {
                res.status(200).json(consultors);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    }
}