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
        ajax.open('GET', `http://localhost:3000/data/${topic}`, false);

        ajax.send();        
        return ajax.responseText;             
    };        
    data = JSON.parse(getTopicData(topic));        

    function renderTopicQuestions() {        
        let quesEl = '';
        console.log(data);
        quesEl += `<p>Câu ${recentQues+1}: ${data[recentQues].question}?</p>
            <input 
                type="text" 
                name="quesIndex"
                hidden 
                value=${recentQues}> `;        
        data[recentQues].answer.forEach(answer => {
            quesEl += `            
                <input 
                    type="radio"         
                    name="answerResult"            
                    class="result-buttons"                    
                    value= ${answer.isCorrect}>
                    ${answer.content}
                <br/>` 
        });
        document.getElementById('data-wrapper').innerHTML = quesEl;
        document.getElementById('answer-result').innerHTML = '';
    };

    function getTopicRange(rangeValue) {
        const sliceValue = rangeValue.indexOf('-');        
        const from = rangeValue.slice(0, sliceValue);
        const to = rangeValue.slice(sliceValue+1, rangeValue.length);

        const rangeFrom = parseInt(from);
        const rangeTo = parseInt(to);

        return { rangeFrom, rangeTo };
    };

    function renderTopicRange() {
        let topicRangeEl = '';

        const renderTimes = Math.floor(data.length/20), renderSurPlus = data.length%20;
        let from = 1, to = 20;                
        for(let i = 0; i <= renderTimes; i ++) {                    
            if(i === renderTimes-1) {                        
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
        for(let i = from; i <= to; i++) {
            questionList += `<a class="question-item" href=${i}>${i}</a>`
        }                
        document.getElementById('question-items-wrapper').innerHTML = questionList;

        // Render question follow the item in question table
        const questionListEl = document.querySelectorAll('.question-item');

        questionListEl.forEach(quesItem => {              
            quesItem.addEventListener('click', (event) => {
                event.preventDefault();
                recentQues = parseInt(event.target.getAttribute('href')-1);
                renderTopicQuestions();
                
                questionListEl.forEach(item => {
                    item.classList.remove('active-question');
                })
                quesItem.classList.add('active-question');
            })
        })
    };                    

    // Validation user actions
    initButton.addEventListener('click', (event) => {         
        if(!topic) return alert('Choose topic');         
        
        // prevent the anchor to render the page
        event.preventDefault();
        // re-render to the first question        
        recentQues = topicRangeFrom-1;
        renderTopicQuestions();
        renderQuestionTable(topicRangeFrom, topicRangeTo);
    });    

    prevButton.addEventListener('click', (event) => {         
        if(!topic) return alert('Choose topic');

        event.preventDefault();    
        // if the recent question === 0, return with error
        if(recentQues === topicRangeFrom-1) {
            alert('Cannot back');
            return;
        }    
        // re-render to the previous question
        recentQues--;
        renderTopicQuestions();
    });

    nextButton.addEventListener('click', (event) => {         
        if(!topic) return alert('Choose topic');        

        // prevent the anchor to render the page
        event.preventDefault();    
        // if the recent question === data.length, return error                
        if(recentQues+1 === topicRangeTo) {
            alert('Cannot next');
            return;
        }
        // re-render to the next question
        recentQues++;
        renderTopicQuestions();
    });    

    // Get topic
    topicOptions.addEventListener('change', (event) => {
        topic = event.target.value.trim().toLowerCase();   
        data = JSON.parse(getTopicData(topic));
        if(topic) renderTopicRange();          

        topicRangeFrom = getTopicRange(topicRange.value).rangeFrom;
        topicRangeTo = getTopicRange(topicRange.value).rangeTo;             
    })        

    // Re-get topic range whenever it changes
    topicRange.addEventListener('change', () => {
        topicRangeFrom = getTopicRange(topicRange.value).rangeFrom;
        topicRangeTo = getTopicRange(topicRange.value).rangeTo;
        recentQues = topicRangeFrom;
    })    
})