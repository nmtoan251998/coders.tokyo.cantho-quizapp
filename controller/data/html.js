const data = require('../../models/fakeHTMLData');

module.exports.send = (req, res) => {
    res.json(data);
}