const data = require('../models/fakePlayData');
let quesIndex = 0;

module.exports.getQuestions = (req, res) => {        
    let answerIndex = req.query.answerIndex || undefined;    
    let answerResult;        
    let innerData = data.filter((pair, index) => index === quesIndex).shift();

    const init = () => {
        innerData = data.filter((pair, index) => index === quesIndex).shift();
        answerIndex = req.query.answerIndex || undefined;
        quesIndex = 0;
    }    
            
    // Play nothing, do nothing
    if(!req.query.answerResult);

    // Check for correctness when radio buttons are clicked
    if(req.query.answerResult) answerResult = (req.query.answerResult === "true") ? true : false;

    // Clear current cache
    if(req.query.init) {
        init();
        return res.redirect('/play');
    }
    // Move to the next question
    if(req.query.next) {
        quesIndex++;                        
        return res.redirect('/play');
    }
    // Back to the pre question
    if(req.query.back) {
        quesIndex--;                        
        return res.redirect('/play');
    }
    
    res.render('pages/play', { innerData, quesIndex, answerResult, answerIndex });
}