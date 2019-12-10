// Higher order functions take another function as an argument or return a function or does both simultaneously

// Example of why you should use a higher order function
function letMeLogin() {
   let arr = [];
   for(let i = 0; i < 5; i++) {
      arr.push(i);
   }
   return 'Access granted to me.';
}
function letJackLogin() {
   let arr = [];
   for(let i = 0; i < 5; i++) {
      arr.push(i);
   }
   return 'Access granted to Jack';
}
letMeLogin();
letJackLogin();
// To avoid WET code, use a generic function instead like this
// and return it in the letUserLogin function
const grantAccessTo = name => `Access granted to ${name}`;
function letUserLogin(user) {
   let arr = [];
   for(let i = 0; i < 5; i++) {
      arr.push(i);
   }
   return grantAccessTo(user);
}
letUserLogin("Jack");
// even more simpliefied by using a higher order function
function authenticate(verify) {
   let arr = [];
   for(let i = 0; i < verify; i++) {
      arr.push(i);
   }
   return true;
}
function letPersonLogin(person, fn) {
   if(person.level === 'admin') {
      fn(5000);
   }
   else if(person.level === 'user') {
      fn(1000)
   }
   return grantAccessTo(person.name);
}
console.log(letPersonLogin({ level: 'user', name: 'Charlie' }, authenticate));