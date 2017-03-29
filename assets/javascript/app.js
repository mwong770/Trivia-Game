
//questions and choices
var competition = 
		[
			{
				question: "What created the spires and pinnacles in the desert?",
				choice1: 'water',
				choice2: 'dried sand',
				choice3: 'minerals',
				choice4: 'people',
				answer: 'water',
				image: "assets/images/spire.jpg"
			},

			{
				question: "what kinds of competition are the ibex having?",
				choice1: 'shelter',
				choice2: 'water',
				choice3: 'mate',
				choice4: 'food',
				answer: 'mate',
				image: 'assets/images/mate.jpg'
			},

			{
				question: "Why is taking the high ground a more effective technique?",
				choice1: 'It surprises their opponent, giving them more time to hit.',
				choice2: 'It scares the animal they are fighting.',
				choice3: 'It makes it easier to get away.',
				choice4: 'It adds more force to their hits.',
				answer: 'It adds more force to their hits.',
				image: 'assets/images/highGround.jpg'
			},

			{
				question: "Why is the desert so full of lizards?",
				choice1: 'The desert supports them.',
				choice2: 'People put them there.',
				choice3: "It doesn't. Lizards are going extinct.",
				choice4: 'Most are male lizards who travel to deserts to find a mate.',
				answer: 'The desert supports them.',
				image: 'assets/images/lizard.jpg'
			},

			{
				question: "How does an ibex fight dirty?",
				choice1: 'by attacking from behind',
				choice2: 'by going 2 against 1',
				choice3: "by using scare tactics",
				choice4: 'by using the high ground',
				answer: 'by going 2 against 1',
				image: 'assets/images/fighting.jpg'
			},

			{
				question: "What resource are the lizards competing for?",
				choice1: 'cool locations',
				choice2: 'a mate',
				choice3: "water",
				choice4: 'flies in the river',
				answer: 'flies in the river',
				image: 'assets/images/fly.jpg'
			}

		];

var abioticFactors = 
		[
			{
				question: "Where does most heat energy come from?",
				choice1: 'the sun',
				choice2: 'your body',
				choice3: 'gas heaters',
				choice4: 'ocean water when it hits high temperatures',
				answer: 'the sun',
				image: "assets/images/sun.png"
			},

			{
				question: "Why is light important to plants?",
				choice1: 'Light helps plants grow by keeping them warm',
				choice2: 'Light gives plants required minerals',
				choice3: 'Light makes plant stems brown',
				choice4: 'Light allows plants to perform photosynthesis',
				answer: 'Light allows plants to perform photosynthesis',
				image: 'assets/images/photosynthesis.gif'
			},

			{
				question: "Why is respiration an aerobic process?",
				choice1: 'Respiration produces low energy - only 2 ATP.',
				choice2: 'Respiration does not require oxygen.',
				choice3: 'Respiration turns oxygen and sugar to carbon dioxide and ethanol.',
				choice4: 'Respiration turns oxygen and sugar to carbon dioxide and water.',
				answer: 'Respiration turns oxygen and sugar to carbon dioxide and water.',
				image: 'assets/images/aerobic.png'
			},

			{
				question: "What are the main components of air?",
				choice1: '78% oxygen and 21% nitrogen gas',
				choice2: '68% oxygen and 31% carbon dioxide',
				choice3: '78% nitrogen gas and 21% carbon dioxide',
				choice4: '78% nitrogen gas and 21% oxygen',
				answer: '78% nitrogen gas and 21% oxygen',
				image: 'assets/images/air.png'
			},

			{
				question: "How is a continuous supply of water provided?",
				choice1: 'forgetting to turn the shower faucet off',
				choice2: 'the water cycle',
				choice3: 'A continuous supply of water is not provided. We lose ocean water every year.',
				choice4: 'the oxygen-carbon dioxide cycle',
				answer: 'the water cycle',
				image: 'assets/images/waterCycle.gif'
			}

		];

var intervalId = 0;
var seconds = 10;
var numberWrong = 0;
var numberRight = 0;
var numberUnanswered = 0;
var questionNumber = 0;
var choice;

var abioticFactorsCategory = false;
var competitionCategory = false;

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

//decreases seconds 
function countDown() {
        seconds--;
        $("#timer").html(seconds);

        if (seconds < 4) {
            $("#timer").css("color", "rgb(255,0,0)");
        } else {
            $("#timer").css("color", "rgb(0,0,0");
        }

        if (seconds <= 0) {
            if (abioticFactorsCategory == true) {
   				endOfTime(abioticFactors);
   			} 	else if (competitionCategory == true) {
   					endOfTime(competition);
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
        seconds = 10;
        $("#timer").html(seconds);
        intervalId = setInterval(countDown, 1000);
        $("#timer").css("visibility", "visible");
        if (abioticFactorsCategory == true) {
        	questions(abioticFactors);
        } 	else if (competitionCategory == true) {
       			questions(competition);
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
	} else if (competitionCategory == true) {
		checkIfRight(competition);
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
    	setTimeout(nextQuestion, 3000, abioticFactors);
    } 	else if (competitionCategory == true) {
    		setTimeout(nextQuestion, 3000, competition);
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
    	setTimeout(nextQuestion, 3000, abioticFactors);
    } 	else if (competitionCategory == true) {
    		setTimeout(nextQuestion, 3000, competition);
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
   			$("#scorePercent").html((numberRight/abioticFactors.length)*100 + "%");
   		} 	else if (competitionCategory == true) {
   				$("#scorePercent").html((numberRight/competition.length)*100 + "%");
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
		numberWrong = 0;
		numberRight = 0;
		questionNumber = 0;
		$("#categories").show();
});































