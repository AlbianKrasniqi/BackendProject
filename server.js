const app = require("./app");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "backendproject",
  user: "root",
  password: "mysql1234",
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("MySQL database is connected successfully!");
});

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log(`Port is running on port: http://${hostname}:${port}/`);
});
