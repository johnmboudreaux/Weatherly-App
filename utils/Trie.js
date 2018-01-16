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

    for (let index = 0; index < wordsArray.length; index++) {
      if (currentBranch) {
        currentBranch = currentBranch.child[wordsArray[index]];
      }
    }
    return currentBranch;
  }

  suggest(word) {
    const currentBranch = this.find(word);
    const suggestion = [];

    if (currentBranch && currentBranch.isWord === true) {
      suggestion.push({ value: word.toLowerCase(), frequency: currentBranch.frequency });
    }

    const trieTraversal = (word, currentBranch) => {
      const keys = Object.keys(currentBranch.child);


      for (let index = 0; index < keys.length; index++) {
        const child = currentBranch.child[keys[index]];
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
    suggestion.sort((alpha, beta) => {
      return beta.frequency - alpha.frequency;
    });
    const suggestionArray = suggestion.map(object => {
      return object.value;
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
