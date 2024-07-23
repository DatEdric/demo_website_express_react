require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const router = require('./routes/web');

const app = express();
const morgan = require('morgan');
const port = 3000;
const hostname = process.env.HOST_NAME;


//config template engine
configViewEngine(app);

//route declare
app.use('/', router);
app.use(morgan('combined'));

// app.get('/api', (req, res) => {
//   res.send({ message: 'connected with Express sucessfuly!' });
// });

app.listen(port,hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
