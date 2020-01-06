// Memoization is a form Caching, which itself is a way of storing values to use them later
const cache = {};
function memoizeAddTo80(n) {
   if(n in cache) {
      return cache[n];
   }
   else {
      cache[n] = n + 80;
      return cache[n];
   }
}
// placing the object in local scope with closures
function XmemoizeAddTo80() {
   const cache = {};

   return function(n) {
      if(n in cache) {
         return cache[n];
      }
      else {
         console.log('cached!');
         cache[n] = n + 80;
         return cache[n];
      }
   }
}
const memoize = XmemoizeAddTo80();
console.log(memoize(5));
console.log(memoize(5));

function ZmemoizeAddTo80(n) {
   const cache = {};
   if(n in cache) {
      return cache[n];
   }
   else {
      console.log('cached!');
      cache[n] = n + 80;
      return cache[n];
   }
}
console.log(ZmemoizeAddTo80(20));
console.log(ZmemoizeAddTo80(20));