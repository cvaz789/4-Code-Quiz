var output = document.getElementById("question-container")
//var questionRender2 = document.getElementById("container")
var start = document.getElementById("start")
var time = document.getElementById("timer")
var timeLeft = 10;

var questionSet = [
    {
        "question": "Who invented JavaScript?",
        "choices": {
            "a": "Douglas Crockford",
            "b": "Sheryl Sandberg",
            "c": "Brendan Eich"
        },
        "correctAnswer": "c"
    
    },

    {
        question: "How do you traverse the DOM?",
        choices: {
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
        /*console.log("length of array: " + questionSet.length);
        console.log(questionSet)
        console.log(JSON.stringify(questionSet[0]));
        */
        

        for (var i=0; i<questionSet.length; i++) {

            //var question1 = questionSet[i]
            var divQuestion = document.createElement("div");
            var question = document.createTextNode(JSON.stringify(questionSet[i]));
            var question2 = document.createTextNode(questionSet[i]); 


            divQuestion.appendChild(question);
            output.appendChild(question);
            
            
            

            //divQuestion.appendChild(question2);
            //questionRender.appendChild(question2);
            //questionRender.innerHTML = questionSet.question;

            

            //console.log(question)
            //console.log(typeof question2)
        }

        
 }

    renderQuestions();
    

})