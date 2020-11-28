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
    <h1>Are you a SIMP? Don't know? Then find out!</h1>
    <button type="button" class="startButton">Begin</button>
  </section>
  `)
}


//Section 2: Event callback functions//
// Here we listen to events, employing event delegation as html will 
// change at different parts of the quiz. 

// Here we listen for when the users clicks a startButton class element, 
// and bring them to the first question of the quiz, making sure their 
// score is reset
function handleStartQuiz () {
  $("main").on("click", ".startButton", event => {
    currentScore = 0;
    currentQuestion = 0;
    //updateScore();
    //renderQuestion();
  })
}