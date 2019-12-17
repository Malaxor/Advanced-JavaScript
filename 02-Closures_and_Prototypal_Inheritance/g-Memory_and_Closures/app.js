// Closures are memory efficient
function heavyDuty(item) {
   const bigArray = new Array(7000).fill('😄')
   console.log('created!');
   return bigArray[item]
 }
 
 heavyDuty(699)
 heavyDuty(699)
 heavyDuty(699)
 // closure is created when we declare this variable
 // anytime we invoke the child function that is returned by heavyDuty2
 // the array (bigArr) is only created once and stored on the memory heap as long as we reference the code
 const getHeavyDuty = heavyDuty2();
 getHeavyDuty(699)
 getHeavyDuty(699)
 getHeavyDuty(699)
 
 // but i dont want to pollute the global namespace..
 function heavyDuty2() {
   const bigArray = new Array(7000).fill('😄')
   console.log('created Again!')
   return function(item) {
     return bigArray[item]
   }
 }