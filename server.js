myApp = {};
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use("*", function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

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


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");