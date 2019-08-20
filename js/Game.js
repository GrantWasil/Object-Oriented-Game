/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that oculd be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("you dont know me"),
      new Phrase("what is love"),
      new Phrase("luke i am your father"),
      new Phrase("please hire me"),
      new Phrase("dungeons and dragons"),
      new Phrase("wubaluba dub dub")
    ];
    return phrases;
  }

  /**
   *  Selects a random phrase from the phrases array
   *  @return {Object}  Phrase object to be used
   */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  /**
   *  Begins game by selecting a random phrase and displaying it
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game was won, false if game wasn't
   */
  checkForWin() {
    const boxes = document.getElementsByClassName("letter");
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].classList.contains("hide")) {
        return false;
      }
    }
    return true;
  }

  /**
   *  Increases the value of the missed propery while removing a life
   *  Checks if player has remaining lives and ends game if they don't
   */
  removeLife() {
    const tries = document.getElementsByTagName("IMG");
    for (let i = 0; i <= this.missed; i++) {
      tries[i].src = "images/lostHeart.png";
    }
    this.missed += 1;
    if (this.missed >= 5) {
      this.gameOver(false);
    }
  }

  /**
   *  Displays game over message
   *  @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "";
    const message = document.getElementById("game-over-message");
    if (gameWon) {
      message.textContent = "You won! Congrats";
      overlay.className = "win";
    } else {
      message.textContent = "How did you lose that?";
      overlay.className = "lose";
    }
    this.reset();
  }

  /**
   * Handles onscreen button clicks
   * @param {HTMLButtonElement} button - The clicked button element
   */
  handleInteraction(button) {
    button.disabled = true;
    const letter = button.textContent;
    if (this.activePhrase.checkLetter(letter)) {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.className = "wrong";
      this.removeLife();
    }
  }

  /**
   * Resets the game so it can be played again
   */
  reset() {
    document.getElementsByTagName("UL")[0].innerHTML = "";
    const keys = document.querySelectorAll(".keyrow button");
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = "key";
      keys[i].disabled = false;
    }
    const tries = document.getElementsByTagName("IMG");
    for (let i = 0; i < tries.length; i++) {
      tries[i].src = "images/liveHeart.png";
    }
    this.missed = 0;
  }
}
