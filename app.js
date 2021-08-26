//requires
require('./config/config');
require('./models/db');

//imports
const express = require('express');
var cookieParser = require('cookie-parser')
var app = express();

//const cors = require('cors');
app.use(cookieParser())
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

//routes
const rtr = require('./routes/router')

//static
const path = require('path');
const static_path = path.join(__dirname, "./public/index");
app.use(express.static(static_path));

//middlewares
app.use('/api', rtr);

//server
app.listen(process.env.PORT, () => console.log(`server started at port: ${process.env.port}`));
