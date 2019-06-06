let quesIndex = 0;

module.exports.getQuestions = (req, res) => {            
    res.render('pages/play', { quesIndex });
}

module.exports.postAnswer = (req, res) => {        
    const answerResult = req.body.answerResult.toString().trim() === "true" ? true : false; 
    const answerExplain = req.body.answerExplain.toString().trim();     
    console.log(answerExplain)   

    if(req.body.answerResult.toString().trim() === "undefined") {
        return res.send(`<div id="answer-result-displayer" class="alert alert-secondary w-75 mx-auto text-center" role="alert">Choose an answer</div>`)
    } 

    if(answerResult === false) {
        return res.send(`<div id="answer-result-displayer" class="alert alert-danger w-75 mx-auto text-center" role="alert">Wrong answer</div>`);
    } 

    if(answerResult === true){        
        res.send(`<div id="answer-result-displayer" class="alert alert-success w-75 mx-auto text-center" role="alert">Correct answer</div> <input id="answer-explain" type="text" hidden value="${answerExplain}">`);
    }       
}