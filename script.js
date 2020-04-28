var output = document.getElementById("question-container")
//var questionRender2 = document.getElementById("container")
var start = document.getElementById("start")
var time = document.getElementById("timer")
var timeLeft = 10;

var questionSet = [
    {
        question: "Who invented JavaScript?",
        answer_bank: [
            {key: 'a', answer: "Douglas Crockford"},
            {key: 'b', answer: "Sheryl Sandberg"},
            {key: 'c', answer: "Brendan Eich"}
        ],
        correctAnswerKey: 'c'
    },

    {
        question: "How do you traverse the DOM?",
        answer_bank: [
            {key: 'a', answer: "My computer"},
            {key: 'b', answer: "A plane"},
            {key: 'c', answer: "Through a javascript file"}
        ],
        correctAnswerKey: 'c'
    }
]

start.addEventListener("click", function() {

    function setTime() {
        var timerInterval = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft + " seconds left on the clock"



     if(timeLeft === 0) {
        clearInterval(timerInterval)
        sendMessage();
     }

    
    }, 1000)

 }

 function sendMessage() {
    time.textContent = "No time left!";
    alert("Your time is up!")
}

    setTime();
    
    function renderQuestion(index) {
        /*console.log("length of array: " + questionSet.length);
        console.log(questionSet)
        console.log(JSON.stringify(questionSet[0]));
        */
       question = questionSet[index]

       document.getElementById("container").innerHTML = `
       <h1 class="total-questions">Questions (${questionSet.length})</h1>
        <div class="question-div">
        ${question.question}
        <br>
        <div id='answer_0' key='${question.answer_bank[0].key}'>${question.answer_bank[0].answer}</div>
        <div id='answer_1' key='${question.answer_bank[1].key}'>${question.answer_bank[1].answer}</div>
        <div id='answer_2' key='${question.answer_bank[2].key}'>${question.answer_bank[2].answer}</div>
        </div>`

        //question.correctAnswerKey
       /* 
       document.getElementById("question-container").innerHTML = `
       <h1 class="total-questions">Questions (${questionSet.length})</h1>
        <div class="question-div">
        ${question.question}
        <br>
        <div id='answer_0' key='${question.answer_bank[0].key}'>${question.answer_bank[0].answer}</div>
        <div id='answer_1' key='${question.answer_bank[1].key}'>${question.answer_bank[1].answer}</div>
        <div id='answer_2' key='${question.answer_bank[2].key}'>${question.answer_bank[2].answer}</div>
        </div>`
        */
        
 }

    renderQuestion(0);
    

})