
//questions and choices
var abioticFactors = 
		[
			{
				question: "Where does most heat energy come from?",
				choice1: 'the sun',
				choice2: 'your body',
				choice3: 'gas heaters',
				choice4: 'ocean water when it hits high temperatures',
				answer: 'the sun',
				// hint: 'sunburn.png',
				image: "assets/images/sun.png"
			},

			{
				question: "Why is light important to plants?",
				choice1: 'Light helps plants grow by keeping them warm',
				choice2: 'Light gives plants required minerals',
				choice3: 'Light makes plant stems brown',
				choice4: 'Light allows plants to perform photosynthesis',
				answer: 'Light allows plants to perform photosynthesis',
				// hint: Camera light/selfie -'Sin of the sister plant',
				image: 'assets/images/photosynthesis.gif'
			},

			{
				question: "Why is respiration an aerobic process?",
				choice1: 'Respiration produces low energy - only 2 ATP.',
				choice2: 'Respiration does not require oxygen.',
				choice3: 'Respiration turns oxygen and sugar to carbon dioxide and ethanol.',
				choice4: 'Respiration turns oxygen and sugar to carbon dioxide and water.',
				answer: 'Respiration turns oxygen and sugar to carbon dioxide and water.',
				// hint: 'eating sugary bon bons while taking in too much oxygen will lead to
				//crying bons in water - toilet
				//start breathing heavy that old sugar daddy will start crying death and sign his will',
				image: 'assets/images/aerobic.png'
			},

			{
				question: "What are the main components of air?",
				choice1: '78% oxygen and 21% nitrogen gas',
				choice2: '68% oxygen and 31% carbon dioxide',
				choice3: '78% nitrogen gas and 21% carbon dioxide',
				choice4: '78% nitrogen gas and 21% oxygen',
				answer: '78% nitrogen gas and 21% oxygen',
				// hint: 'Why did the boy pass gas everyseconds he disagreed with his mom? 
				//Because the acronym for the main components of air spell N.O.',
				image: 'assets/images/air.png'
			},

			{
				question: "How is a continuous supply of water provided?",
				choice1: 'forgetting to turn the shower faucet off',
				choice2: 'the water cycle',
				choice3: 'A continuous supply of water is not provided. We lose ocean water every year.',
				choice4: 'the oxygen-carbon dioxide cycle',
				answer: 'the water cycle',
				// hint: '',
				image: 'assets/images/waterCycle.gif'
			}

		];

var intervalId = 0;
var seconds = 10;
var numberWrong = 0;
var numberRight = 0;
var numberUnanswered = 0;
var questionNumber = 0;

$("#startButton").on("click", game);
$("#imageResult").hide();
$("#replayButton").hide();

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
        $("#questionDiv").css("display", "none");
        $("#timer").css("visibility", "hidden");
        $("#resultDiv").show();
        $("#result").html("The correct answer is..."); 
        $("#correctAnswer").html(abioticFactors[questionNumber].answer);
        $("#imageResult").attr("src", abioticFactors[questionNumber].image);
        $("#imageResult").show();
		setTimeout(nextQuestion, 3000);
}

function endOfTime() {
	wrongChoice();
	numberUnanswered++;
	$("#message").html("Oops. You ran out of time.");
}

function nextQuestion() {
	questionNumber++;
	if (questionNumber == abioticFactors.length) {
        gameOver();
        } 	else {
        		game();
        		$("#resultDiv").hide();
        		$("#questionDiv").css("display", "block");;
    		}
}

function game() {
		$("#homepageImages").remove();
		$("#gameDiv").remove();
        seconds = 10;
        $("#timer").html(seconds);
        intervalId = setInterval(countDown, 1000);
        $("#timer").css("visibility", "visible");
        $("#question").html(abioticFactors[questionNumber].question);
        $("#choice1").html(abioticFactors[questionNumber].choice1);
        $("#choice2").html(abioticFactors[questionNumber].choice2);
        $("#choice3").html(abioticFactors[questionNumber].choice3);
        $("#choice4").html(abioticFactors[questionNumber].choice4);
        $("#questionDiv").css("display", "block");           
}

$(".choices").on('click', function() {
            if( $(this).text() === abioticFactors[questionNumber].answer) {
                clearInterval(intervalId);
                numberRight++;
                $("#questionDiv").css("display", "none");
                $("#timer").css("visibility", "hidden");
                $("#resultDiv").show();
                $("#message").html("You got it right.");
                $("#result").html("Way to go!");
                $("#correctAnswer").html('');
                $("#imageResult").attr("src", abioticFactors[questionNumber].image);
                $("#imageResult").show();
                setTimeout(nextQuestion, 3000);
            } 		else {
                		wrongChoice();
                		numberWrong++;
                		$("#message").html("Oh no. That is not correct.")
            	}
});

function gameOver() {
		$("#resultDiv").hide();
		$("#numCorrect").html(numberRight);
        $("#numWrong").html(numberWrong);
        $("#numUnanswered").html(numberUnanswered);
   		$("#scorePercent").html((numberRight/abioticFactors.length)*100 + "%");
   		$("#summaryDiv").css("display", "block");
   		$("#replayButton").show();
}

$("#replayButton").on("click", function() {
		$("#summaryDiv").css("display", "none");
		$("#replayButton").hide();
		numberWrong = 0;
		numberRight = 0;
		questionNumber = 0;
		game();
});































