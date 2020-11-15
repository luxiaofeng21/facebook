let mysql = require('mysql')
exports.base = (sql,data,callback)=>{
	let connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'facebook'
	})
	connection.connect();
	connection.query(sql,data, function (error, results, fields) {
  	if (error) throw error;
  		callback && callback(results)
	})
	connection.end();
}