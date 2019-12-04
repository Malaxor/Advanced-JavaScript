// Primitives (data that only represents a single value)
console.log('typeof 5:', typeof 5); // number
console.log('typeof true:', typeof true); // boolean
console.log('typeof string:', typeof "I'll be back"); // string
console.log('typeof undefined:', typeof undefined); // undefined
console.log('typeof null:', typeof null); // object (it's a programming error from when the language was created)
console.log('typeof symbol:', typeof Symbol('just you')); // symbol
console.log('=========================');
// primitives have object wrappers, so they have methods added to the buit in object prototype
console.log('true'.indexOf('t'));
console.log(Number(7).toString());
console.log(true.toString());
console.log('=========================');
// Objects (don't directly contain the actual value: reference value)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // object but returns function as typeof