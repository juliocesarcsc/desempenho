Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

exports.db = sequelize;
