//var renderList = document.querySelector("container")
var questionList = document.querySelector("#question-list")
var start = document.getElementById("start")
var time = document.getElementById("timer")
var timeLeft = 10;

const questionSet = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    
    },

    {
        question: "How do you traverse the DOM?",
        answers: {
            a: "My computer",
            b: "A plane",
            c: "Through a javascript file"
        },
        correctAnswer: "c"
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
    
    function renderQuestions() {
        console.log("length of array: " + questionSet.length);
        console.log(questionSet)
        console.log(JSON.stringify(questionSet[0]));

        questionList.innerHTML = "";

        for (var i=0; i<questionSet.length; i++) {

            var question = questionSet[i]

            var liQuestion = document.createElement("li");
            liQuestion.textContent = question;
            liQuestion.setAttribute("data-index", i);

            questionList.appendChild(liQuestion);          
        }

        
 }

    renderQuestions();
    

})