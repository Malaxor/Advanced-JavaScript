// let view;

// function intilialize() {
//    let called = 0;
//    return function() {
//       if(called > 0) {
//          return;
//       }
//       else {
//          view = 'Beautiful vista';
//          called++;
//          console.log('view has been set');
//       }
//    }
// }
// const startOnce = intilialize();
// startOnce();

// Exercise 2
// const arr = [1, 2, 3, 4];
// for(var i = 0; i < arr.length; i++) {
//    setTimeout(() => {
//       console.log(`I'm at index ${i}`);
//    }, 3000)
// }   
// Solution 1
const nums = [1, 2, 3, 4];
for(let i = 0; i < nums.length; i++) { // change var to let
   setTimeout(() => {
      console.log(`I'm at index ${i}`);
   }, 3000)
} 
// Solution 2
// 
const arr2 = [1, 2, 3, 4];
for(var i = 0; i < arr2.length; i++) { 
   (function(closureI) {
      setTimeout(() => {
         console.log(`I'm at index ${closureI}`);
      }, 3000) 
   }(i))
} 