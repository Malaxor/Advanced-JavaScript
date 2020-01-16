// try and catch only work for synchronous code!
function fail() {
   try { 
      console.log('this works');
      throw new Error('woops'); // this error will be caught below
   } // try doesn't work without the catch or finally block
   catch(error) {
      console.log('ERROR!', error); // displays error information, including stack trace
   } // irrespective of what happes in try and catch, code written within finally will execute
   finally {
      console.log('still good');
   }
}
fail();