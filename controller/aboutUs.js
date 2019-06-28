const data = require('../models/teamLeader');
const stringMakeUp = require('../function/string-interaction')

module.exports.getAboutUs = (req, res) => {
    let teamLeaderData = [...data];
    teamLeaderData.forEach(item => item.name = stringMakeUp.upperFirstCase(item.name))

    res.render('pages/aboutUs', { teamLeaders: teamLeaderData});
}