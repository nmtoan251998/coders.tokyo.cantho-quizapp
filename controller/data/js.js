// const data = require('../../models/fakeJSData');
const data = require('../../models/javascript');

module.exports.send = (req, res) => {    
    res.json(data);
}