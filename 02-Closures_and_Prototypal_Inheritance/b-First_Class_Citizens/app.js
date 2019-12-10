// Functions are first class citizens:

// Functions can be assigend to variables
const variableFn = function() {}
// Functions can pass other functions as parameters/arguments
function fnPara(fn) {
   fn();
}
fnPara(function() { console.log("I'm a function argument")});
// Functions can return functions 
function a() {
   return function b() {
      console.log("I'm function b located within function a");
   }
}
console.log(a()());