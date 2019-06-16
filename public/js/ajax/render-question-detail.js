document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById('check-button');

    checkButton.addEventListener('click', () => {  
        setTimeout(() => {
            const answerResultTextContent = document.getElementById('answer-result-displayer').textContent.toString().trim();            
            const answerResult = answerResultTextContent.slice(0, answerResultTextContent.indexOf(' '));            

            if(answerResult === "Correct") {
                const answerExplanation = document.getElementById('answer-explain').value;         
                alert(answerExplanation);
            }            
        }, 1000)               
    })
})