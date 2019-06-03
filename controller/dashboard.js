const data = require('../models/fakeUsersData');
const stringMakeUp = require('../function/stringInteraction');

module.exports.getDashboard = (req, res) => {
    let userData = [...data];

    userData.forEach(user => {
        user.name = stringMakeUp.upperFirstCase(user.name);
    });

    res.render('pages/dashboard', { users: userData });
}