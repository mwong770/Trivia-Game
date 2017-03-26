

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
var questionNumber = 0;

$("#startButton").on("click", game);
$("#image").hide();

function countDown() {
        seconds--;
        $("#timer").html(seconds);

        if (seconds < 4) {
            $("#timer").css("color", "rgb(255,0,0)");
        } else {
            $("#timer").css("color", "rgb(0,0,0");
        }

        if (seconds <= 0) {
            endOfTime();
        }
}

function wrongChoice() {
		clearInterval(intervalId);
        numberWrong++;
        $("#questionDiv").hide();
        $("#timer").css("visibility", "hidden");
        $("#resultDiv").show();
        $("#result").html("The correct answer is..."); 
        $("#correctAnswer").html(abioticFactors[questionNumber].answer);
        $("#image").attr("src", abioticFactors[questionNumber].image);
        $("#image").show();
        setTimeout(nextQuestion, 3000);
}

function endOfTime() {
	wrongChoice();
	$("#message").html("Oops. You ran out of time.");
}

function nextQuestion() {
	questionNumber++;
	if (questionNumber == abioticFactors.length) {
        gameOver();
        } 	else {
        		game();
        		$("#resultDiv").hide();
        		$("#questionDiv").show();
    		}
}

function game() {
		$("#startButton").hide();
        seconds = 10;
        $("#timer").html(seconds);
        intervalId = setInterval(countDown, 1000);
        $("#timer").css("visibility", "visible");
        $("#question").html(abioticFactors[questionNumber].question);
        $("#choice1").html(abioticFactors[questionNumber].choice1);
        $("#choice2").html(abioticFactors[questionNumber].choice2);
        $("#choice3").html(abioticFactors[questionNumber].choice3);
        $("#choice4").html(abioticFactors[questionNumber].choice4);
        $("#questionDiv").show();            
}

$(".choices").on('click', function() {
            if( $(this).text() === abioticFactors[questionNumber].answer) {
                clearInterval(intervalId);
                numberRight++;
                $("#questionDiv").hide();
                $("#timer").css("visibility", "hidden");
                $("#resultDiv").show();
                $("#message").html("You got it right.");
                $("#result").html("Way to go!");
                $("#correctAnswer").html('');
                $("#image").attr("src", abioticFactors[questionNumber].image);
                $("#image").show();
                setTimeout(nextQuestion, 3000);
            } 		else {
                		wrongChoice();
                		$("#message").html("Oh no. That is not correct.")
            	}
});

function gameOver() {
		$("#resultDiv").hide();
		$("#numCorrect").html("Number Right " + numberRight);
        $("#numWrong").html("Number Wrong " + numberWrong);
        $("#numUnanswered").html("Number Unanswered " + abioticFactors.length - numberRight - numberWrong);
   		$("#scorePercent").html("Percent Right " + (numberRight/abioticFactors.length)*100 + "%");
   		$("#summaryDiv").css("visibility", "visible");
}

$("#replayButton").on("click", function() {
		$("#summaryDiv").css("visibility", "hidden");
		numberWrong = 0;
		numberRight = 0;
		questionNumber = 0;
		game();
});































