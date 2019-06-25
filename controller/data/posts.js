// const data = require('../../models/fakeCSSData');
const data = require('../../models/posts');

module.exports.send = (req, res) => {
    res.json(data);
}