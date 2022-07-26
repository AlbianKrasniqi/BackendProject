const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const app = require("./app");

const connection = mysql.createConnection({
  host: "localhost",
  database: "backendproject",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("MySQL connection successful!");
});

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log(`Port is running on port: http://${hostname}:${port}/`);
});
