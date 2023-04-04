import mysql from "promise-mysql";
import config from "./../config";

// Connection DB
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
});

// Function Connection
const getConnection = () => {
    return connection;
};

// Export
module.exports = {
    getConnection
};

