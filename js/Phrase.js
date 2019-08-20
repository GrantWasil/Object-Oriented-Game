/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /*
   *  Creates the placeholders for the letters when the game starts
   *  @param {Object}  phrase -  The phrase that the user will guess
   */
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      const box = document.createElement('li');
      if (this.phrase[i] === ' ') {
        box.className = 'space';
        box.textContent = ' ';
      } else {
        box.className = `hide letter ${this.phrase[i]}`;
        box.textContent = this.phrase[i];
      }
      document.getElementsByTagName("UL")[0].appendChild(box);
    }
  }

  /**
   * Checks if passed letter is in the phrase
   * @param {string}  letter - letter to check
   */
  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter == this.phrase[i]){
        return true;
      }
    }
    return false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param {string} letter = letter to display
   */
  showMatchedLetter(letter) {
    const boxes = document.getElementsByClassName(letter)
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].className = `show letter ${letter}`;
    }
  }
}
