function mergeSortedArr(arr1, arr2) {
   const mergedArr = [];
   let array1Item = arr1[0];
   let array2Item = arr2[0];
   let i = 1;
   let j = 1;
   // basic check of input
   if(arr1.length === 0) {
      return arr2;
   }
   if(arr2.length === 0) {
      return arr1;
   }
   while(array1Item !== undefined || array2Item !== undefined) {
      if(array1Item < array2Item) {
         mergedArr.push(array1Item);
         array1Item = arr1[i];
         i++;
      }
      else {
         mergedArr.push(array2Item);
         array2Item = arr2[j];
         j++;
      }
   }
   return mergedArr;
}
const array1 = [0, 1, 2];
const array2 = [3, 4, 5];
console.log(mergeSortedArr(array1, array2));