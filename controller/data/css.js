// const data = require('../../models/fakeCSSData');
const data = require('../../models/css');

module.exports.send = (req, res) => {
    res.json(data);
}