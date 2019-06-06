<!-- TODOs -->
- Play page: 
    + Make it more fancy.
    + Point calculator    
    + Answered questions table
- User page: 
    + Server side pagination
- Dashboard: render fake dashboard information.



<!-- question-content -->
<p>Câu <%= quesIndex+1 %>: <%= innerData.question %>?</p> 
        <form action="/play" method="GET" id="question-form">
            <input 
                type="text" 
                name="quesIndex"
                hidden 
                value=<%= quesIndex %>>
            <%  innerData.answer.forEach((answer, index) => { 
                if(index === parseInt(answerIndex)) {%>
                    <input 
                        type="radio" 
                        name="answerResult"
                        class="result-buttons"
                        id= <%= index %>
                        checked
                        value= <%= answer.isCorrect %>>
                        <%= answer.content %>
                        <br/>
                <%} else {%> 
                    <input 
                        type="radio" 
                        name="answerResult"
                        class="result-buttons"
                        id= <%= index %>
                        value= <%= answer.isCorrect %>>
                        <%= answer.content %>
                        <br/>
            <% }}) %>
            <input 
                type="text" 
                name="answerIndex"
                id="index-button"
                hidden>
            <input 
                type="text" 
                name="nextQues"
                id="nextQues-button"
                value= <%= quesIndex+1 %>
                hidden>
            <div class="u-mb-1"></div>            
            <button class="button-submit btn btn-primary">Check</button>
            <div class="button-group float-right">                                                
                <% if(quesIndex > 0) {%>
                    <a href="/play?back=true" class="btn btn-warning">Back</a>
                <% } %>
                <a href="/play?next=true" class="btn btn-warning">Next</a>                                          
            </div>

<!-- Result of the question -->
        <% if(answerResult) { 
            if(answerResult === true) %>
                <div class="alert alert-success w-75 mx-auto text-center" role="alert">Correct answer</div>
            <% } else if(answerResult === false) { %>
                <div class="alert alert-danger w-75 mx-auto text-center" role="alert">Wrong answer</div>
        <% } %>