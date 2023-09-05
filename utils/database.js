const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "12345678",
  database: "hackathon",
});
module.exports = pool.promise();
