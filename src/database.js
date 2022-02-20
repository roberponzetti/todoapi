// Mysql object connection
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bb2cfd37a2a0bd',
    password: '34ef705e',
    database: 'heroku_e985aba1ccfc973'
});

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Database connected!');
    }
});

module.exports = mysqlConnection;