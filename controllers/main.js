/**
 * Created by Julio on 09-11-17.
 */
exports.ctrl = {
    index: function index(req, res) {
        res.send(myApp.render('index', {}));
    }
}
