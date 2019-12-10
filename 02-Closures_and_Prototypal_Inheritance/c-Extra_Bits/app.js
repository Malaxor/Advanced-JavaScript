// Don't initialize a function within a loop
for(let i = 0; i < 5; i++) {
   function dont() {
      console.log("Bad idea, man");
   }
   dont();
}
// Rather, do this instead: now we're executing it in the loop, but initializing it once
function doThis() {
   console.log("Good idea!");
}
for(let i = 0; i < 5; i++) {
   doThis();
}
// intializing a function, returning a parameter, but omitting the parameter 
function a() {
   return param;
}
console.log(a());