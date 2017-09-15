export defaults class Branch {
  constructor(letter = null) {
    this.letter = letter;
    this.isWord = false;
    this.child = {};
    this.frequency = 0;
  }
}
