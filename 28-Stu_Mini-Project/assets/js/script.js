// // INDECES
var fullWords = ["my", "balogna", "had", "a", "first", "name"];
var alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
// console.log(alphabet);

// QUERY SELECTORS
var start = document.querySelector(".start-button");
var reset = document.querySelector(".reset-button");
var keyPressed = document.querySelector(".card word-guess");

// // EVENT LISTENERS
// BUTTONS:
// ... start
start.addEventListener("click", startGame);
// ... reset
reset.addEventListener("click", resetScores);
// keydown
keyPressed.addEventListener("keydown", keyPressed);

// // VARIABLES
// wins
var wins;

// losses
var losses;

// correctLetters
var correctLetters;

// words
var words;

// timerCount
var timerCount;

// references to elements??
// SEE "QUERY SELECTORS" HEADING, ABOVE

// Key Input
// var keyPressed = function(event) {
//     var key = event.key.textContent = keyPressed;
//     if (keyPressed.includes(splitWords)
// }

// // FUNCTIONS
// function startGame() {
//   // insert function code for timerStart
// }

// function resetScores() {
//   // insert function code to clear win/loss counts
// }

// function timer() {
//   // insert function code for countdown timer
// }

// // localStorage
// var wins
// var losses
