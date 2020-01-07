// Function composition is a mechanism of combining multiple simple functions to build a more complicated one.
const compose = (f1, f2) => (data) => f1(f2(data));
const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
console.log(multiplyBy3AndAbsolute(-50));

// Piping 
fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50);