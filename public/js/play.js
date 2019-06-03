document.addEventListener("DOMContentLoaded", () => {
    const answerButtons = document.querySelectorAll('.result-buttons');
    const indexButtons = document.querySelector('#index-button');

    answerButtons.forEach(radioButton => {
        radioButton.addEventListener("click", (event) => {
            const buttonId = event.target.getAttribute('id');
            indexButtons.setAttribute("value", buttonId);
        })
    })
});