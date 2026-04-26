const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "mysql", // later: mysql (in docker-compose network)
  user: "lemon_user",
  password: "lemon_pass",
  database: "db_lemons",
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool.promise();