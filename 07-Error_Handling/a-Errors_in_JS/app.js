const myError = new Error('threat detected!');
// error objects have three properties:
console.log(myError.name); // variable name
console.log(myError.message); // error message
console.log(myError.stack); // error's location

function fnError() {
   const b = new Error('what?');
   console.log(b);
}
a(); // displays: Error: what?
// at fnError (name of function) app.js:8 <-- location in code (in this case, it's within a function context)
// at app.js: 11 <-- global exectution context