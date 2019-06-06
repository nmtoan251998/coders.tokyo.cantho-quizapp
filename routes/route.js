const router = require('express').Router();

const testController = require('../controller/test');
const htmlController = require('../controller/data/html');
const playController = require('../controller/play');
const dashboardController = require('../controller/dashboard');
const userController = require('../controller/users');

// route    /test
// desc     use to test REST API
router.route('/test').get(testController.testData);    

// route    /data/html
// desc     API to send data
router.route('/data/html').get(htmlController.send);    

// route    /
// desc     home page
router.route('/').get((req, res) => res.render('pages/index'));    

// route    /play
// desc     play page
router.route('/play')
    .get(playController.getQuestions)
    .post(playController.postAnswer);

// route    /dashboard
// desc     dashboard page
router.route('/dashboard').get(dashboardController.getDashboard);

// route    /user
// desc     user page
router.route('/user').get(userController.getUsers);

module.exports = router;