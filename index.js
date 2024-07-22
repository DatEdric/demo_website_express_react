require('dotenv').config();
const express = require('express');
const configViewEngine = require('./src/config/viewEngine');
const router = require('./src/routes/web');

const app = express();
const port = 3000;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', router);

// app.get('/api', (req, res) => {
//   res.send({ message: 'connected with Express sucessfuly!' });
// });

app.listen(port,hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
