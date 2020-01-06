// Higher Order Functions take a function as an argument or return another function
const hof = () => () => 5;
console.log(hof()());

const hof2 = (fn, num) => {
   return fn(num);
}
function logNumber(num) {
   console.log(num);
}
console.log(hof2(logNumber, 2));

const var_hof2 = hof2(function logNumber(number) { console.log(number); }, 10);
console.log(var_hof2);

// Closures
const closure = function() {
   let count = 0;
   return function() {
      count++;
      console.log(count);
   }
}
const incrementCount = closure();
incrementCount();