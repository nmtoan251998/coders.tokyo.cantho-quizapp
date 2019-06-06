document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById('check-button');

    checkButton.addEventListener('click', (event) => {
        event.preventDefault();                                
        let elements = Array.from(document.querySelectorAll('.result-buttons'));  
        let quesDetail = '';
        
        try {   
            const answer = elements.filter(el => {
                if(el.checked === true) {
                    quesDetail = el.dataset.detail;                    
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
            ajax.send('answerResult=' +answer +'&quesDetail=' +quesDetail);
        } catch(err)    {            
            let ajax = new XMLHttpRequest;
            ajax.open("post", "http://localhost:3000/play", true)
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    document.getElementById('answer-result').innerHTML = ajax.responseText;                                
                }
            };            
            ajax.send('answerResult=undefined' +'&quesDetail=' +quesDetail);
        }                                
    });            
})