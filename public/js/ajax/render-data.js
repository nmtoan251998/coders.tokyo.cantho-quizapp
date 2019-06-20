document.addEventListener("DOMContentLoaded", () => {
    const initButton = document.getElementById('init-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const topicOptions = document.getElementById('topic-options');
    const topicRange = document.getElementById('topic-range');

    let recentQues = 0;
    let topic;
    let topicRangeFrom, topicRangeTo;
    let data;

    // Fetch data from API using ajax
    function getTopicData(topic = 'html') {
        let ajax = new XMLHttpRequest();
        // topic is choosen frequently
        ajax.open('GET', `http://localhost:3000/data/${topic}`, false);

        ajax.send();
        return ajax.responseText;
    };
    // get data for the first time
    data = JSON.parse(getTopicData(topic));

    function renderTopicQuestions() {
        let quesEl = '';
        quesEl += `<p>Question ${recentQues + 1}: ${data[recentQues].question}?</p>`;
        data[recentQues].answer.forEach(answer => {
            quesEl += `
                <input 
                    type="radio"         
                    name="answerResult"
                    data-answerexplain="${data[recentQues].detail}"
                    class="result-buttons"                    
                    value=${answer.isCorrect}>
                    ${answer.content}
                <br/>`
        });
        document.getElementById('data-wrapper').innerHTML = quesEl;
        document.getElementById('answer-result').innerHTML = '';        
    };

    function calculateTopicRange(rangeValue) {
        const sliceValue = rangeValue.indexOf('-');
        const from = rangeValue.slice(0, sliceValue);
        const to = rangeValue.slice(sliceValue + 1, rangeValue.length);

        const rangeFrom = parseInt(from);
        const rangeTo = parseInt(to);

        return { rangeFrom, rangeTo };
    };        

    function renderTopicRange() {
        let topicRangeEl = '';

        // render only 20 questions
        const renderTimes = Math.floor(data.length / 20), renderSurPlus = data.length % 20;
        let from = 1, to = 20;
        for (let i = 0; i <= renderTimes; i++) {
            if (i === renderTimes - 1) {
                topicRangeEl += `<option value=${from}-${to}>${from}-${to}</option>`;
                from += 20;
                to += renderSurPlus;
            } else {
                topicRangeEl += `<option value=${from}-${to}>${from}-${to}</option>`;
                from += 20;
                to += 20;
            }
        }
        document.getElementById('topic-range').innerHTML = topicRangeEl;
    };

    function renderQuestionTable(from, to) {
        let questionList = '';
        for (let i = from; i <= to; i++) {
            questionList += `<a class="question-item" href=${i}>${i}</a>`
        }
        document.getElementById('question-items-wrapper').innerHTML = questionList;

        // Render question follow the item in question table
        const questionListEl = document.querySelectorAll('.question-item');

        questionListEl.forEach(quesItem => {
            quesItem.addEventListener('click', (event) => {
                event.preventDefault();
                
                // re-render question everytime the question in the questionTable is clicked
                recentQues = parseInt(event.target.getAttribute('href') - 1);
                renderTopicQuestions();

                // emphasize recent question
                questionListEl.forEach(item => {
                    item.classList.remove('active-question');
                })
                quesItem.classList.add('active-question');
            })
        })
    };

    // ISSUE: Error sometimes can be occured due to ajax response data are not able to come on time
    function emphasizeRecentQuestion() {        
        // Render question follow the item in question table
        const questionListEl = document.querySelectorAll('.question-item');        
        questionListEl.forEach((quesItem, index) => {
            quesItem.classList.remove('active-question');
            // hightlight the recent question
            if(index + topicRangeFrom === (recentQues+1)) {                
                quesItem.classList.add('active-question');                
            }
        })
    };

    /*===== HELPER FUNCTIONS =====*/
    function getTopicRange() {
        topicRangeFrom = calculateTopicRange(topicRange.value).rangeFrom;
        topicRangeTo = calculateTopicRange(topicRange.value).rangeTo;
    }

    function render() {
        renderTopicQuestions();        
        emphasizeRecentQuestion();
    }    

    // Validation user actions    
    prevButton.addEventListener('click', (event) => {
        if (!topic) return alert('Choose topic');

        event.preventDefault();
        // if the recent question === 0, return with error
        if (recentQues === topicRangeFrom - 1) {
            alert('Opps, cannot goes back from here.');
            return;
        }
        // re-render to the previous question
        recentQues--;
        render();
    });

    nextButton.addEventListener('click', (event) => {
        if (!topic) return alert('Choose topic');

        // prevent the anchor to render the page
        event.preventDefault();
        // if the recent question === data.length, return error                
        if (recentQues + 1 === topicRangeTo) {
            alert('Today eposide is enought, see you guys next time ^^');
            return;
        }
        // re-render to the next question
        recentQues++;
        render();
    });

    // Get topic
    topicOptions.addEventListener('change', (event) => {
        topic = event.target.value.trim().toLowerCase();
        data = JSON.parse(getTopicData(topic));

        if (!topic) return alert('Choose topic');
        if (topic) renderTopicRange();
        
        getTopicRange();       
        renderQuestionTable(topicRangeFrom, topicRangeTo);        
        render();
    })

    // Re-get topic range whenever it changes
    topicRange.addEventListener('change', () => {
        getTopicRange();
        recentQues = topicRangeFrom - 1;        
                                
        renderQuestionTable(topicRangeFrom, topicRangeTo);        
        render();
    })
})