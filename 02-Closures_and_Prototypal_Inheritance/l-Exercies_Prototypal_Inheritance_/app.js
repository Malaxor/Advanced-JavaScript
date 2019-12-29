// Date object: add a new method called .lastYear that converts the year into last year ('YYYY'  format)
Date.prototype.lastYeaar = function() {
   return this.getFullYear() - 1;
}
console.log(new Date('2008-03-04').lastYeaar());

// Modify .map() to print "dolphin" at the end of each iteration
Array.prototype.map = function() {
   const arr = [];
   for(let i = 0; i < this.length; i++) {
      arr.push(this[i] + ' dolphin');
   }
   return arr;  
}
const nums = [1, 2, 3];
const dolphin = nums.map();
console.log(dolphin);