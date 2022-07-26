const express = require('express');
const app = express();
const cors = require('cors');
require('./db/database.js');

const userRouter = require('./routes/userRoutes');
const gradesRouter = require('./routes/gradeRoutes');
const subjectsRouter = require('./routes/subjectRoutes');
const notFound = require('./middleware/notFound');

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/grades', gradesRouter);
app.use('/api/v1/subjects', subjectsRouter);
app.use(notFound);

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
  console.log(`Port is running on port: http://${hostname}:${port}/`);
});
