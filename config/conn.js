Sequelize = require('sequelize');
//var conn_db = {
//    db_name: "sql3206184",
//    user: "sql3206184",
//    password: "MBc6YzFcnv",
//    host: "sql3.freemysqlhosting.net",
//}

var conn_db = {
    db_name: "test",
    user: "root",
    password: "root",
    host: "localhost",
}

var sequelize = new Sequelize(conn_db.db_name, conn_db.user, conn_db.password, {
    host: conn_db.host,
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
