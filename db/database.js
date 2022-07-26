const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'backendpro',
  user: 'root',
  password: '',
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('MySQL database is connected successfully!');
});

module.exports = connection;
