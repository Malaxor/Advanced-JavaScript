const human = {
   mortal: true
};
const socrates = Object.create(human); // creates a new object that has access to the human objects properties (through the prototype)
socrates.age = 45;
console.log(socrates);
console.log(human.isPrototypeOf(socrates)); // true