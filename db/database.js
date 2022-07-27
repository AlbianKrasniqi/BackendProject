const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('MySQL database is connected successfully!');
});

module.exports = connection;
