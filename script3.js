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

        //question.correctAnswerKey

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

        const button = `<button id="choice_button_0" onclick="btn0()"><div id='answer_0' key='${question.answer_bank[0].key}'>${question.answer_bank[0].answer}</div></button>`
        document.getElementById("answer_0");
        answer_0.innerHTML = button
        
        const button1 = `<button class="choice_button_1" onclick="btn1()"><div id='answer_1' key='${question.answer_bank[1].key}'>${question.answer_bank[1].answer}</div></button>`
        document.getElementById("answer_1");
        answer_1.innerHTML = button1

        const button2 = `<button class="choice_button_2" onclick="button2()"><div id='answer_2' key='${question.answer_bank[2].key}'>${question.answer_bank[2].answer}</div></button>`
        document.getElementById("answer_2");
        answer_2.innerHTML = button2

        function pressedBtns() {
            document.getElementById("choice_button_0").addEventListener("click", function(btn0) {
                console.log("button0")
            })
            document.getElementById("choice_button_1").addEventListener("click", function(btn1) {
                console.log("button1")
            })
        }
        pressedBtns(); 
 }
    
    renderQuestion(0);
    
})




// function button2() {
//     document.getElementById("choice_button_2").addEventListener("click", function() {
//         console.log("button2")
//     })
// }
// button2();

    // var choiceBtn0 = document.getElementById("choice_button_0"); 

    // if(choiceBtn0) {
    //     choiceBtn0.addEventListener("click");
    // }
    
        // var chBtn0 = document.getElementById("answer_0");
        // if(chBtn0) {
        //     chBtn0.addEventListener("click", function(test) {
        //         console.log("test")
        //     })
        // }
    
    
            
    
    

    //var question0 = questionSet[0].answer_bank[0] = true;
        
    //     // if(question0 == true) {
    //     //     console.log("it was clicked")
    //     // }




    



    


 


