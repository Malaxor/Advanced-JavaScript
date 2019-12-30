function Creature(name, location) {
   this.name = name;
   this.location = location;
}
Creature.prototype.loacteSelf = function() {
   return `I live in ${this.location}`;
}

const tiger = new Creature('tiger', 'India');
const lion = new Creature('lion', 'Africa');
console.log(tiger.loacteSelf());