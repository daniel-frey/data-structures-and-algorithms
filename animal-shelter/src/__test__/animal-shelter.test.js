'use strict';

const AnimalShelter = require('../animal-shelter');
const Animal = require('../animal');

const shelter = new AnimalShelter();

const dog1 = new Animal();
dog1.type = 'dog';
dog1.name = 'sox';
const cat1 = new Animal();
cat1.type = 'cat';
cat1.name = 'hound';
const dog2 = new Animal();
dog2.type = 'dog';
dog2.name = 'inky';
const cat2 = new Animal();
cat2.type = 'cat';
cat2.name = 'gregor';
const dog3 = new Animal();
dog3.type = 'dog';
dog3.name = 'mia';
const cat3 = new Animal();
cat3.type = 'cat';
cat3.name = 'milo';
const dog4 = new Animal();
dog4.type = 'dog';
dog4.name = 'sydney';

shelter.enqueue(dog1);
shelter.enqueue(dog2);
shelter.enqueue(dog3);
shelter.enqueue(dog4);
shelter.enqueue(cat1);
shelter.enqueue(cat2);
shelter.enqueue(cat3);


describe('#fifo-animal-shelter.js', () => {
  test('testing to see if the correct cat is adopted', () => {
    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);
    expect(shelter.dequeue('cat')).toEqual({ type: 'cat', name: 'hound' });
  });

  test('testing to see if the correct animals are adopted', () => {
    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);
    expect(shelter.dequeue('cat')).toEqual({ type: 'cat', name: 'hound' });
    expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'sox' });
    expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'sox' });
  });

  test('testing to see if the longest waiting pet has a new forever home', () => {
    expect(shelter.dequeue('donkey')).toEqual({ type: 'dog', name: 'sox' });
  });
});
