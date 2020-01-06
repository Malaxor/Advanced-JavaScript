// Immutability means not changing the data or state
const obj = { 
   name: 'Philip'
};
// pure function
function clone(obj) {
   return {
      ...obj
   };
}
function updateName(obj) {
   const clonedObj = clone(obj);
   clonedObj.name = 'Who?';
   return clonedObj;
}
console.log(updateName(obj));
console.log(obj);