'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.cat = [];
    this.dog = [];
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cat.push(animal);
      return undefined;
    }
    this.dog.push(animal);
    return undefined;
  }

  dequeue(pref) {
    let longestWait = 0;
    let adoptedPet = null;

    if (this.cat.length >= this.dog.length) {
      longestWait = this.cat[0]; // eslint-disable-line
    } else {
      longestWait = this.dog[0]; // eslint-disable-line
    }

    if (pref !== 'dog' && pref !== 'cat') {
      return longestWait;
    }

    if (pref === 'cat') {
      adoptedPet = this.cat[0]; // eslint-disable-line
      return adoptedPet;
    }
    adoptedPet = this.dog[0]; // eslint-disable-line
    return adoptedPet;
  }
};
