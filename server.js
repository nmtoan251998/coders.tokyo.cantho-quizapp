const server = require('express')();
const bodyParser = require('body-parser');

const router = require('./routes/route');
const data = require('./models/cloneData');

// clear the console yeye
require('clear')();

// body-parser middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// set EJS view engine
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

// use route
server.use(router);

server.listen(3000, () => console.log(`Server is started`));