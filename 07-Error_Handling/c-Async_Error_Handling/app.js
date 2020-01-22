Promise.resolve('async error handling')
   .then(res => {
      throw new Error('1st fail');
      return res;
   })
   .then(res => {
      console.log(res);
   }) // this catches the error above
   .catch(err => {
      console.log(err);
      throw new Error('hello')
   })
   // this .then will log the above error
   .then(newError => {
      console.log(newError);
   }) // this won't run because the .catch above handled the thrown Error
   .catch(err => {
      console.log(err.message);
});