const data = require('../../models/fakeCSSData');

module.exports.send = (req, res) => {
    res.json(data);
}