const express = require('express');
const app = express();
const cors = require('cors');
require('./db/database.js');

const mainRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');
const notFound = require('./middleware/notFound');

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);
app.use('/api/v1/users', userRouter);
app.use(notFound);

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
  console.log(`Port is running on port: http://${hostname}:${port}/`);
});
