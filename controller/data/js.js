const data = require('../../models/fakeJSData');

module.exports.send = (req, res) => {    
    res.json(data);
}