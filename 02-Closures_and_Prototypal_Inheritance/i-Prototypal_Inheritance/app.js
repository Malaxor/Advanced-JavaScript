const arr = [];
console.log(arr.__proto__);

function a() {}
console.log(a.__proto__.__proto__);

const obj = {};
obj.__proto__;

const dragon = {
   name: 'Cray',
   fire: true,
   fight() {
      return 5;
   },
   sing() {
      return `I'm ${this.name}, breather of fire!`;
   }
}
const lizard = {
   name: 'Kiki',
   fight() {
      return 1;
   }
}
lizard.__proto__ = dragon;
console.log(dragon.isPrototypeOf(lizard)); // true
console.log(lizard.sing());