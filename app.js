const express = require('express');
const user = require('./routes/user');
const student = require('./routes/student');
const app = express();

app.use('/api/user', user);
app.use('/api/student', student);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Server started on port ${port}`); });
