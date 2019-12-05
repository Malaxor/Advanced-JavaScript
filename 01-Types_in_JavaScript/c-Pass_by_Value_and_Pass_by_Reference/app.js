// Primitives are passed by value
let a = 5;
let b = a; // variable b equals the value of variable a (a copy is created)
// when we change the value of variable b, the value of variable a is not changed
b++;
console.log(a); // variable a still equals 5
console.log(b); // variable b is now 6

// Objects are passed by reference (a copy is not created)
const obj1 = {
   name: 'Philip',
   age: 36
};
const obj2 = obj1 // obj2 points to the same address in memory as obj1
obj2.age = 100; // changing the age property on obj2 modifies the age property on obj1

// console.log(obj1);
// console.log(obj2);

// Cloning Objects 
const obj = {
   a: "a",
   b: "b",
   c: {
      deep: 'try and copy me'
   }
};
// shallow clones don't penetrate into nested objects
const shallowClone = Object.assign({}, obj); // shallow clone
const shallowClone2 = { ...obj }; // shallow clone
// deep clone
const deepClone = JSON.parse(JSON.stringify(obj));

obj.b = 5; // changing the value of property c on the initial object doesn't change the value of property c on the cloned object
obj.c.deep = 'i changed you'; // this will modify the shallow cloned objects' nested object property value (c.deep)

console.log('original obj', obj);
console.log('Object.assign shallow clone', shallowClone);
console.log('spread operator shallow clone', shallowClone2);
console.log('deep clone', deepClone); // if we modify the original object's properties, the deep clone object does not change at all