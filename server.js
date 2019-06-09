const server = require('express')();
const bodyParser = require('body-parser');
const express = require('express');
const port = 3000;
const router = require('./routes/route');

// clear the console yeye
require('clear')();

// set EJS view engine
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

// set public files
server.use(express.static('public'));

// body-parser middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// header middleware allow html request
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    next();
})

// use route
server.use(router);

server.listen(port, () => console.log(`Server is started on port ${port}`));
