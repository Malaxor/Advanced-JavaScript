const promise = new Promise((resolve, reject) => {
   if(true) {
      resolve("It's alive!");
   }
   else {
      reject("You're not Dr.Frankenstein...");
   }
});
promise
.then(result => `${result}!`)
.then(result2 => {
   console.log(result2);
})
.catch(() => console.log(`error`)) // catches errors anywhere in the ".then" chain before it, not after
.then(result3 => {
   console.log(result3);
});

const promise2 = new Promise((resolve, reject) => {
   setTimeout(resolve, 100, 'Hello!');
});
const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 1000, 'Guy!');
});
const promise4 = new Promise((resolve, reject) => {
   setTimeout(resolve, 5000, "What's happening?");
});
// in this case, all these promises will resolve after the longest one finishes (promise4)
Promise.all([promise, promise2, promise3, promise4])
.then(values => console.log(values));