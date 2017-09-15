import Branch from './Branch';

export default class CompleteMe {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  insert(word) {
    const branch = new Branch();

    if (this.root === null) {
      this.root = branch;
    }

    const letters = [...word.toLowerCase()];

    let childBranch = this.root;

    letters.forEach(letter => {
      if (!childBranch.child[letter]) {
        childBranch.child[letter] = new Branch(letter);
      }
      childBranch = childBranch.child[letter];
    });

    if (!childBranch.isWord) {
      childBranch.isWord = true;
      this.wordCount++;
    }
  }

  find(word) {
    const wordsArray = [...word.toLowerCase()];
    let currentBranch = this.root;

    for (let i = 0; i < wordsArray.length; i++) {
      currentBranch = currentBranch.child[wordsArray[i]];
    }
    return currentBranch;
  }

  suggest(word) {
    const currentBranch = this.find(word);
    const suggestion = [];

    if (currentBranch.isWord === true) {
      suggestion.push({ value: word.toLowerCase(), frequency: currentBranch.frequency });
    }

    const trieTraversal = (word, currentBranch) => {
      const keys = Object.keys(currentBranch.child);


      for (let i = 0; i < keys.length; i++) {
        const child = currentBranch.child[keys[i]];
        const newString = word.toLowerCase() + child.letter;

        if (child.isWord) {
          suggestion.push({ value: newString, frequency: child.frequency });
        }
        trieTraversal(newString, child);
      }
    };

    if (currentBranch) {
      trieTraversal(word, currentBranch);
    }
    suggestion.sort((a, b) => {
      return b.frequency - a.frequency;
    });
    const suggestionArray = suggestion.map(obj => {
      return obj.value;
    });
    return suggestionArray;
  }

  select(word) {
    const currentBranch = this.find(word);

    currentBranch.frequency++;
  }

  populate(cities) {
    cities.forEach(word => {
      this.insert(word);
    });
  }


}
