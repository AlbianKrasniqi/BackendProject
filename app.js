const express = require('express');
const cors = require('cors');
const app = express();

const mainRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');
const notFound = require('./middleware/notFound');

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);
app.use('/api/v1/users', userRouter);
app.use(notFound);

module.exports = app;
