// Function composition is a mechanism of combining multiple simple functions to build a more complicated one.
function compose(fn1, fn2) {
   return function(data) {
      return fn1(fn2(data));
   }
}
const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
console.log(multiplyBy3AndAbsolute(-50));