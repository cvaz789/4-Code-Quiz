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
        }
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
})