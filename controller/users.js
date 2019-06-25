const data = require('../models/fakeUsersData');
const stringMakeUp = require('../function/string-interaction');

module.exports.getUsers = (req, res) => {
    let userData = [...data];        

    userData.forEach(user => {
        user.name = stringMakeUp.upperFirstCase(user.name);
        user.email = stringMakeUp.protectString(user.email, '*', 4);
        user.phone = stringMakeUp.protectString(user.phone, '*', 5)
    });

    res.render('pages/users', { users: userData });
}