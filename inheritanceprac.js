function Animal(name){
  this.name = name
};
Animal.prototype.move = 'walk';

function Bird(name){
  Animal.call(this, name);
};
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.move = 'fly';
Bird.prototype.hasWings = true;

function Fish(name){
  Animal.call(this, name);
};
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.move = 'swim';

function Penguin(name){
    Bird.call(this, name);
};
Penguin.prototype = Object.create(Animal.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.move = Fish.prototype.move;
