myApp = {};
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// configuration =================
myApp.db = require('./config/conn').db;
//Importing utils
require('./config/util');
//Importing models
require('./config/model');
//Importing controllers
require('./config/controllers');
//Importing routes
require('./config/routes')(app);


// check db connection
myApp.db.authenticate()
    .then(function () {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.error('Unable to connect to the database:', err);
    });

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");