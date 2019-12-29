function createElf(name, weapon) {
   return {
      name: name,
      weapon: weapon,
      attack() {
         return 'attack with ' + weapon;
      }
   };
}
const phil = createElf('phil', 'charm');
const charles = createElf('charles', 'odor');
// better way
function createDragon(name, weapon) {
   return {
      name: 'Bonggle',
      weapon: 'fire'
   };
}
const dragonMethods = {
   attack() {
      return `attacked with ${this.weapon}`;
   }
};
const Bonggle = createDragon('Bonggle', 'fire');
Bonggle.attack = dragonMethods.attack;
console.log(Bonggle.attack());

// using Object.create()
function createDragon2(name, weapon) {
   const newDragon = Object.create(dragonMethods2);
   newDragon.name = name;
   newDragon.weapon = weapon;
   return newDragon;
}
const dragonMethods2 = {
   attack() {
      return `${this.name} attacked with ${this.weapon}`;
   }
};
const viserion = createDragon2('Viserion', 'strength');
console.log(viserion.attack());