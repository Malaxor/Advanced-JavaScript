class Character {
   constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
   }
   attack() {
      return `${this.name} attacked with ${this.weapon}`;
   }
}
class Elf extends Character {
   constructor(name, weapon, type) {
      super(name, weapon);
      this.type = type;
   }
}
const dolby = new Elf('Dolby', 'shovel', 'agronomist');
console.log(dolby.attack());