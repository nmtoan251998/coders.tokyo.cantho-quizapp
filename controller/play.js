const HTMLdata = require('../models/fakeHTMLData');
let quesIndex = 0;

module.exports.getQuestions = (req, res) => {        
    let answerIndex = req.query.answerIndex || undefined;    
    let answerResult;            
            
    // Play nothing, do nothing
    if(!req.query.answerResult);

    // Check for correctness when radio buttons are clicked
    if(req.query.answerResult) answerResult = (req.query.answerResult === "true") ? true : false; 

    res.render('pages/play', { quesIndex, answerResult, answerIndex, fullData: HTMLdata });
}

module.exports.postAnswer = (req, res) => {        
    const answerResult = req.body.answerResult.toString().trim() === "true" ? true : false;    
    
    if(req.body.answerResult.toString().trim() === "undefined") {
        return res.send(`<div class="alert alert-secondary w-75 mx-auto text-center" role="alert">Choose an answer</div>`)
    }

    if(answerResult === true) {
        res.send(`<div class="alert alert-success w-75 mx-auto text-center" role="alert">Correct answer</div>`);
    } else {
        res.send(`<div class="alert alert-danger w-75 mx-auto text-center" role="alert">Wrong answer</div>`);
    }    
}