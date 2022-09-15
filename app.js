function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the Capital of India?", ["New Delhi", "Mumbai","Jaipur", "Kolkata"], "New Delhi"),

    new Question("which year is this?", ["2012", "2021","2202", "2022"], "2022"),
	
	new Question("What animal is it? <br> <img src='dog.jpg'/> </br>", ["Elephant", "Bengal Tiger","Lion", "Dog"], "Dog"),
   
	new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),

    new Question("Spell the word Happy backwords?", ["appyH", "Hppya","yppaH", "pypHa"], "yppaH"),
	
    new Question("How many questions completed till now?", ["four", "five","three", "six"], "five"),	
	
	new Question("which colour is not present in Indian Flag?", ["Orange", "White","Green", "Black"], "Black"),
	
	new Question("number of objects in the above image are? <br> <img src='watch.jpg'/> </br> ", ["four", "03","06", "two"], "03"),
	
	new Question("number of colours in rainbow?", ["08", "five","seven", "06"], "seven"),
	
	new Question("What comes after a,b,c,__ and 4,5,__ ?", ["d,7", "e,6","d,6", "g,6"], "d,6"),
        

];


var quiz = new Quiz(questions);


populate();




