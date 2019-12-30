class Creature {
   constructor(name, location) {
      this.name = name;
      this.location = location;
   }
   loacteSelf() {
      return `I live in ${this.location}`;
   }
}

const tiger = new Creature('tiger', 'India');
const lion = new Creature('lion', 'Africa');
console.log(tiger.loacteSelf());