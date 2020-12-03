'use strict';
/////////////////////
// Section 1: Rendering Functions // functions that update the HTML according to the state stored in javascript 
////////////////////
// These are a set of functions that update the HTML according to the 
// state stored in our javascript variables. These functions are called via the functions in the event callback section. 

// The start/menu screen is rendered , called at the beginning of 
// the program on page load. 
function renderStartPage () {
  $("main").html(`
  <section class="startPage">
    <h2>Are you a SIMP? Don't know? Then find out!</h2>
    <img src="start-page-simp-pic.jpg">
    <br>
    <button type="button" class="startButton">Begin</button>
  </section>
  `);
}
// Now we render a form that user will use to answer the current question. 
// We obtain the current question and its multiple choice options from the 
// global javascript state 
function renderQuestion () {
  let question = getCurrentQuestion();

  $("main").html(`
  <section class="questionBackground">
    <form class="questionForm">
      <fieldset class="radio" >
        <legend><h2>${question.question}</h2></legend>
        <label>
          <input type="radio" value="${question.answer1}" name="answer" required>
          <span>${question.answer1}</span>
        </label>
        <label>
          <input type="radio" value="${question.answer2}" name="answer" required>
          <span>${question.answer2}</span>
        </label>
        <label>
          <input type="radio" value="${question.answer3}" name="answer" required>
          <span>${question.answer3}</span>
        </label>
        <label>
          <input type="radio" value="${question.answer4}" name="answer" required>
          <span>${question.answer4}</span>
        </label>
      </fieldset>

      <button type="submit" class="next-button">Submit</button>
    </form>
  </section>
  `);
}

// Now when the user clicks the Submit button, they will be shown the Answer screen
// if correct, congrats them and explain why
// if incorrect, give them correct answer and explain why 

function renderAnswer (answer, correctAnswer, explanation) {
  //Correct Answer
  if (answer === correctAnswer) {
    $('main').html(`
    <section class="answerScreen">
      <div><h1 class="answer-right">Correct!</h1></div>
      <img src="man-of-culture.jpg">
      <div class="container">
        <div class="answer-div">The answer is: <span class="answer-font">${correctAnswer}</span></div>
        <br>
        <div class="answer-div">${explanation}</div>
      </div>
      <br>
      <button type="button" class="nextQuestion">Next Question</button>
    </section>
    `);
  }
  //Wrong Answer
  else {
    $('main').html(`
    <section class="answerScreen">
      <div><h1 class="answer-wrong">Wrong Answer!</h1></div>
      <img src="skinner-pathetic.jpeg">
      <div class="container">
      <div class="answer-div wrong">Your answer was: <span class="answer-font">${answer}</span></div>
      <br>
      <div class="answer-div wrong">The correct answer is: <span class="answer-font">${correctAnswer}</span></div>
      <br>
      <div class="answer-div wrong">${explanation}</div>
      </div>
      <br>
    <button type="button" class="nextQuestion">Next Question</button>
    </section>
    `);
  }

}

function renderFeedback() {
  let won = getScore() == getTotalNumQuestions();

  $('main').html(`
  <section class="feedbackScreen">
    <div>
      <h1 class="">${won ? "You passed the SIMP Quiz!" : "I'm very sorry, but. you. Are. A. SIIIIIIIMP."}</h1>
    </div>
    <img ${won ? "src='virgin-winner.png'" : "src='simp-card.jpg'"}>
      <br>
      <br>
    <div class="feedback-div">
      <span class="">Final Score</span>: <span class="score">${getScore()}</span>/${getTotalNumQuestions()}</div>
      <br>
    <div class="feedback-div">
      ${won ? "You have demonstrated your worth and walk proudly down the righteous path." : "Actually, not sorry. Go hug your waifu pillow. You disgust me. Take the quiz again if you want any chance at redemption."}
    </div>
    <br>
    <button type="button" class="startButton">Play Again</button>
    </section>
  `);
}

function updateScore() {
  $('.score').html(currentScore);

  let questionNum = currentQuestion + 1;
  questionNum = Math.min(questionNum, getTotalNumQuestions());
  $('.questionNumber').html(questionNum);
}


///////////////////////////////////////
//Section 2: Event callback functions//
/////////////////////////////////////////
// Here we listen to events, employing event delegation as html will 
// change at different parts of the quiz. 

// Here we listen for when the users clicks a startButton class element, 
// and bring them to the first question of the quiz, making sure their 
// score is reset
$(function handleSetup() {
  renderStartPage();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestion();
  updateScore();
}
);
function handleStartQuiz () {
  $("main").on("click", ".startButton", event => {
    currentScore = 0;
    currentQuestion = 0;
    updateScore();
    renderQuestion();
  });
}  

function handleAnswerSubmit() {
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    
    let answer = $('input[name="answer"]:checked', '.questionForm').val();
    let isCorrect = checkAnswer(answer, currentQuestion);
    if(isCorrect) {
      currentScore++;
      updateScore();
    }

    renderAnswer(answer, getCorrectAnswer(currentQuestion), getExplanation(currentQuestion));
  });
}

function handleNextQuestion () {
  $('main').on('click', '.nextQuestion', event => {
    currentQuestion++;
    updateScore();

    if (currentQuestion >= quizQuestions.length) {
      renderFeedback();
    }
    else {
      renderQuestion();
    }
  });
}


/////////////////////////////////
// Section 3: Utility Functions
////////////////////////////////
// Here we standardize methods for accessing global state data

function getCurrentQuestion() {
  return quizQuestions[currentQuestion]
}

function getCorrectAnswer(questionNumber) {
  return quizAnswers[questionNumber];
}

function getExplanation(questionNumber) {
	return quizExplanations[questionNumber];
}

function getTotalNumQuestions() {
	return quizQuestions.length;
}

function checkAnswer(answer, questionNumber) {
	let question = quizQuestions[questionNumber];
	let correctAnswer = getCorrectAnswer(questionNumber);
	return correctAnswer == answer;
}

function getScore () {
  return currentScore;
}

