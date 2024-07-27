require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');

//route init
const route = require('./routes/index');
//connect db
const db = require('./config/db_config');
db.connectdb();

const app = express();
const morgan = require('morgan');
const port = 3000;
const hostname = process.env.HOST_NAME;
app.use(morgan('combined'));

//config template engine
configViewEngine(app);

//route declare
route(app);

app.listen(port, hostname, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
