function mergeSortedArr(arr1, arr2) {
   const result = [];
   let counter = 0;
   let index1 = 0;
   let index2 = 0;
   const sumLength = array1.length + array2.length;

   while(counter < sumLength) {
      const isArr1Empty = index1 >= arr1.length;
      const isArr2Empty = index2 >= arr2.length;

      if(!isArr1Empty && (isArr2Empty || arr1[index1] < array2[index2])) {
         result[counter] = arr1[index1];
         index1++;
      }
      else {
         result[counter] = arr2[index2];
         index2++;
      }
      counter++;
   } 
   return result;
}
const array1 = [0, 2, 3, 5, 90];
const array2 = [1, 2, 8];

console.log(mergeSortedArr(array1, array2));