const server = require('express')();
const bodyParser = require('body-parser');
const express = require('express');

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

// use route
server.use(router);

server.listen(3000, () => console.log(`Server is started`));
