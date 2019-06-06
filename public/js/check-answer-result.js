document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById('check-button');

    checkButton.addEventListener('click', (event) => {
        event.preventDefault();                        
        let errorCatching;
                
        let elements = Array.from(document.querySelectorAll('.result-buttons'));  
        try {
            const answer = elements.filter(el => el.checked === true).shift().value;

            let ajax = new XMLHttpRequest;
            ajax.open("post", "http://localhost:3000/play", true)
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    document.getElementById('answer-result').innerHTML = ajax.responseText;                                
                }
            };
            ajax.send('answerResult=' +answer);
        } catch(err)    {
            errorCatching = err;

            let ajax = new XMLHttpRequest;
            ajax.open("post", "http://localhost:3000/play", true)
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4 && ajax.status == 200) {
                    document.getElementById('answer-result').innerHTML = ajax.responseText;                                
                }
            };            
            ajax.send('answerResult=undefined' );
        }                                
    });            
})