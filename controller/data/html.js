const data = require('../../models/html');

module.exports.send = (req, res) => {
    res.json(data);
}