function mergeSortedArr(arr1, arr2) {
   const result = [];
   const sumLength = arr1.length + arr2.length;
   let pointer1 = 0;
   let pointer2 = 0;
   
   for(let i = 0; i < sumLength; i++) {

      if(arr1[pointer1] === undefined) {
         result.push(arr2[pointer2]);
         pointer2++;
         continue;
      }
      if(arr2[pointer2] === undefined) {
         result.push(arr1[pointer1]);
         pointer1++;
         continue;
      }
      
      if(arr1[pointer1] < arr2[pointer2]) {
         result.push(arr1[pointer1]);
         pointer1++;
      }
      else {
         result.push(arr2[pointer2]);
         pointer2++
      }
   }
   return result;
}

const array1 = [0, 2, 3, 5, 90];
const array2 = [1, 2, 8];

console.log(mergeSortedArr(array1, array2));