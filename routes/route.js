const router = require('express').Router();
const playController = require('../controller/play');
const dashboardController = require('../controller/dashboard');
const userController = require('../controller/users');

// route    test
// desc     use to test REST API
router.route('/test')
    .get((req, res) => {
        res.json({ msg: 'test successfully' });
    })
    .post((req, res) => {        
        res.json({ input: req.body.input });
    })
    .delete((req, res) => {
        res.json({ delId: req.body.id });
    })

// route    /
// desc     home page
router.route('/')
    .get((req, res) => {
        res.render('pages/index');
    });    

// route    /play
// desc     play page
router.route('/play')
    .get(playController.getQuestions);

// route    /dashboard
// desc     dashboard page
router.route('/dashboard')
    .get(dashboardController.getDashboard);

// route    /user
// desc     user page
router.route('/user')
    .get(userController.getUsers);

module.exports = router;