/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

// Starts the game when the "Start Game" button is pressed
document.getElementById("btn__reset").addEventListener("click", function() {
  game.startGame();
});

// When a button is clicked, pass it to the game object
document.getElementById("qwerty").addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});
