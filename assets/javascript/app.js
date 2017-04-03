
var intervalId = 0;
var seconds = 15;
var numberWrong = 0;
var numberRight = 0;
var numberUnanswered = 0;
var questionNumber = 0;
var choice;

var abioticFactorsCategory = false;
var competitionCategory = false;
var symbiosisCategory = false;

//hides elements will use later
$("#imageResult").hide();
$("#replayButton").hide();
$("#categories").hide();

//when click start, show categories buttons and remove some homepage elements
$("#startButton").on("click", function() {
	$("#categories").show();
	$("#homepageImages").remove();
	$("#gameDiv").remove();
});

//when click abioticFactors button, set abioticFactors to true
//and call game function
$("#abioticFactors").on("click", function() {
	abioticFactorsCategory = true;
	game();
});

//when click category button, set category to true
//and call game function
$("#testCategory").on("click", function() {
	competitionCategory = true;
	game();
});

$("#symbiosisCategory").on("click", function() {
	symbiosisCategory = true;
	game();
});

//decreases seconds 
function countDown() {
        seconds--;
        $("#timer").html(seconds);

        if (seconds < 6) {
            $("#timer").css("color", "rgb(255,0,0)");
        } 	else {
            	$("#timer").css("color", "rgb(0,0,0");
        	}

        if (seconds <= 0) {
            if (abioticFactorsCategory == true) {
   				endOfTime(abioticFactors);
   			} 	else if (competitionCategory == true) {
   					endOfTime(competition);
   		  		} 	else if (symbiosisCategory == true) {
   						endOfTime(symbiosis);
   					}
        }
}

//displays current question
function questions(category) {
	$("#question").html(category[questionNumber].question);
    $("#choice1").html(category[questionNumber].choice1);
    $("#choice2").html(category[questionNumber].choice2);
    $("#choice3").html(category[questionNumber].choice3);
    $("#choice4").html(category[questionNumber].choice4);
}

//sets and activates timer
//calls questions function
function game() {
		$("#homepageImages").remove();
		$("#gameDiv").remove();
		$("#categories").hide();
        seconds = 15;
        $("#timer").html(seconds);
        intervalId = setInterval(countDown, 1000);
        $("#timer").css("visibility", "visible");
        if (abioticFactorsCategory == true) {
        	questions(abioticFactors);
        } 	else if (competitionCategory == true) {
       			questions(competition);
       		} 	else if (symbiosisCategory == true) {
       				questions(symbiosis);
       			}
        $("#questionDiv").css("display", "block");          
}

//if no more questions in array, calls endOfGame function
//if more questions in array, calls game function
function nextQuestion(category) {
	questionNumber++;
		if (questionNumber == category.length) {
        	gameOver();
        } 	else {
        		game();
        		$("#resultDiv").hide();
        		$("#questionDiv").css("display", "block");;
    		}
}

//calls checkIfRight function when click choice
$(".choices").on('click', function() {
	choice = $(this);
	if (abioticFactorsCategory == true) {
		checkIfRight(abioticFactors);
	} 	else if (competitionCategory == true) {
			checkIfRight(competition);
		} 	else if (symbiosisCategory == true) {
				checkIfRight(symbiosis);
			}
});

//if click correct choice, calls correctChoice function
//if choice is not correct, calls wrongChoice function
function checkIfRight(category) {
	if(choice.text() === category[questionNumber].answer) {
 		correctChoice(category);
	} 	else {
      		wrongChoice(category);             		
 		}
}

//hides question and choices and stops timer
//displays congratulatory resultDiv
function correctChoice(category) {
	clearInterval(intervalId);
    numberRight++;
    $("#questionDiv").css("display", "none");
    $("#timer").css("visibility", "hidden");
    $("#resultDiv").show();
    $("#message").html("You got it right.");
    $("#result").html("Way to go!");
    $("#correctAnswer").html('');
    $("#imageResult").attr("src", category[questionNumber].image);
    $("#imageResult").show();
    if (abioticFactorsCategory == true) {
    	setTimeout(nextQuestion, 5000, abioticFactors);
    } 	else if (competitionCategory == true) {
    		setTimeout(nextQuestion, 5000, competition);
    	} 	else if (symbiosisCategory == true) {
    			setTimeout(nextQuestion, 5000, symbiosis);
    		}
}

//displays message indicating incorrect and calls incorrect function
function wrongChoice(category) {
		numberWrong++;
		$("#message").html("Oh no. That is not correct.")
		incorrect(category);
}

//hides question and choices, stops timer and calls nextQuestion function
//displays resultDiv
function incorrect(category) {
	clearInterval(intervalId);
    $("#questionDiv").css("display", "none");
    $("#timer").css("visibility", "hidden");
    $("#resultDiv").show();
    $("#result").html("The correct answer is..."); 
    $("#correctAnswer").html(category[questionNumber].answer);
    $("#imageResult").attr("src", category[questionNumber].image);
    $("#imageResult").show();
	if (abioticFactorsCategory == true) {
    	setTimeout(nextQuestion, 5000, abioticFactors);
    } 	else if (competitionCategory == true) {
    		setTimeout(nextQuestion, 5000, competition);
    	} 	else if (symbiosisCategory == true) {
    			setTimeout(nextQuestion, 5000, symbiosis);
    		}
}

//shows message indicating ran out of time and calls incorrect function
function endOfTime(category) {
	numberUnanswered++;
	$("#message").html("Oops. You ran out of time.");
	incorrect(category);
}

//hides resultDiv and displays a summary of the user's performance
function gameOver() {
		$("#resultDiv").hide();
		$("#numCorrect").html(numberRight);
        $("#numWrong").html(numberWrong);
        $("#numUnanswered").html(numberUnanswered);
        if (abioticFactorsCategory == true) {
   			$("#scorePercent").html(parseInt((numberRight/abioticFactors.length)*100) + "%");
   		} 	else if (competitionCategory == true) {
   				$("#scorePercent").html(parseInt((numberRight/competition.length)*100) + "%");
   		  	} 	else if (symbiosisCategory == true) {
   					$("#scorePercent").html(parseInt((numberRight/symbiosis.length)*100) + "%");
   				}
   		$("#summaryDiv").css("display", "block");
   		$("#replayButton").show();
}

//when click replayButton, hides summary info, resets variables, and displays categories
$("#replayButton").on("click", function() {
		$("#summaryDiv").css("display", "none");
		$("#replayButton").hide();
		abioticFactorsCategory = false;
		competitionCategory = false;
		symbiosisCategory = false;
		numberWrong = 0;
		numberRight = 0;
		questionNumber = 0;
		$("#categories").show();
});































