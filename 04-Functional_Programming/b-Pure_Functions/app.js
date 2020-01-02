// Pure functions can't modify the state of any variable outside itself
const arr = [1, 2, 3];
// impure function with side effects
function a(arr) {
   return arr.pop();
}
a(arr);
console.log(arr);

// rewritten code that doesn't change the original array
const arr2 = [1, 2, 3];
// pure function
function b(arr) {
   const newArr = [ ...arr ];
   newArr.pop();
   return newArr;
}
console.log(b(arr2));
console.log(arr2);

// Given their parameter input, pure functions always return the same output 
// referential transperancy
function c(num1, num2) {
   return num1 + num2;
}
c(1, 2);
