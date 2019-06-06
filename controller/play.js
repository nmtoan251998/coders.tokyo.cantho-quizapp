let quesIndex = 0;

module.exports.getQuestions = (req, res) => {            
    res.render('pages/play', { quesIndex });
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