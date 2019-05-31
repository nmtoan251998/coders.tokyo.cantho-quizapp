const router = require('express').Router();

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
    })

// route    /play
// desc     play page
router.route('/play')
    .get((req, res) => {
        res.render('pages/play');
    })


module.exports = router;