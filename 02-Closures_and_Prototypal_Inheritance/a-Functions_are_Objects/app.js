// Functions are objects (also called callable objects)
const sayHi = new Function('return "hello"');
console.log(sayHi());

const num = new Function('num', 'return num');
console.log(num(10));

function talk() {
   return "i'm a sentient computer";
}
talk.yell = 'yaaaaaaaaaaa';
console.log(talk());
console.log(talk.yell);