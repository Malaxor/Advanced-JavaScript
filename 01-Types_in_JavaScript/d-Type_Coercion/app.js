let typeCoercion = 1 == '1'; // double equals converts the value from one type (number, boolean, string) to another 
console.log(typeCoercion);

if(1) {
   console.log(5)
} // type coercion: the number 1 is coerced to the boolean true

// Exercises
false == ""  // true 
false == []  // true
false == {}  // false
"" == 0      // true
"" == []     // true
"" == {}     // false
0 == []      // true
0 == {}      // false
0 == null    // false