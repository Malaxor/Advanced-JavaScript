const obj = {
   name: "Sally"
};
obj.hasOwnProperty('Sally'); // true

function helloYou() {}
a.hasOwnProperty('call'); // false
a.hasOwnProperty('apply'); // false
a.hasOwnProperty('name') // true (the NAME of the function is helloYou)

function multiplyBy5(num) {
   return num * 5;
}
multiplyBy5.__proto__; // points to the base object (prototype)