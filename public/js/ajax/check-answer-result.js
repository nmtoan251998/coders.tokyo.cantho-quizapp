document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById('check-button');

    checkButton.addEventListener('click', (event) => {
        event.preventDefault();                                
        let elements = Array.from(document.querySelectorAll('.result-buttons'));  
        let answerExplain = '';
        
        try {   
            const answer = elements.filter(el => {
                if(el.checked === true) {
                    answerExplain = el.dataset.answerexplain;                        
                    return el;
                }                
            }).shift().value;
            let ajax = new XMLHttpRequest;
            ajax.open("post", "http://localhost:3000/play", true)
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    document.getElementById('answer-result').innerHTML = ajax.responseText;                    
                }
            };
            // if answerResult === true, send answerResult and explanation content
            ajax.send('answerResult=' +answer +'&answerExplain=' +answerExplain);
        } catch(err)    {            
            let ajax = new XMLHttpRequest;
            ajax.open("post", "http://localhost:3000/play", true)
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    document.getElementById('answer-result').innerHTML = ajax.responseText;                                
                }
            };            
            // if answerResult === true, send answerResult = undefined for server to serve
            ajax.send('answerResult=undefined' +'&answerExplain=' +answerExplain);
        }                                
    });            
})