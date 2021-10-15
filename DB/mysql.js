// get the client
const mysql = require('mysql2');
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD
});
const promisePool = pool.promise();
module.exports = {
  async query(sql, fields) {
    try {
      const res = await promisePool.query(sql, fields);
      return res[0];
    } catch (error) {
      return error;
    }
  },
  async getConnection(){
    try {
      const conn = await promisePool.getConnection();
      return conn;
    } catch (error) {
      
    }
  }
}