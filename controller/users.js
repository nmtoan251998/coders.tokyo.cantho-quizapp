const data = require('../models/fakeUsersData');
const stringMakeUp = require('../function/stringInteraction');

module.exports.getUsers = (req, res) => {
    let userData = [...data];

    userData.forEach(user => {
        user.name = stringMakeUp.upperFirstCase(user.name);
        user.email = stringMakeUp.protectUserEmail(user.email, '*', 4);
    })    

    res.render('pages/users', { users: userData });
}