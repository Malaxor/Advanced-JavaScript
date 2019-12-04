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
const clone = Object.assign({}, obj); // shallow clone
const clone2 = { ...obj }; // shallow clone
const superClone = JSON.parse(JSON.stringify(obj)); // a complete clone is performed 

obj.b = 5; // changing the value property c on the initial object doesn't change the object property c on the cloned object
obj.c.deep = 'i changed you'; // this will modify the cloned objects' c.deep nested object property value
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone); // if we modify the original object's properties, the super clone object does not change at all