const app = require("./app");

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log(`Port is running on port: http://${hostname}:${port}/`);
});
