const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');

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
  console.log('MySQL connection successful!');
});

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
  console.log(`Port is running on port: http://${hostname}:${port}/`);
});
