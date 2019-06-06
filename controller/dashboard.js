const data = require('../models/fakeUsersData');
const stringMakeUp = require('../function/string-interaction');

module.exports.getDashboard = (req, res) => {
    let userData = [...data];

    userData.forEach(user => user.name = stringMakeUp.upperFirstCase(user.name));    

    const sortScores = (object) => object.sort((a, b) => b.score - a.score);

    userData = sortScores(userData).slice(0, 5);

    res.render('pages/dashboard', { users: userData });
}