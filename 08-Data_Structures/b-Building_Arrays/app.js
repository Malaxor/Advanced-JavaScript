class MyArray {
   constructor() {
      this.length = 0;
      this.data = {};
   }
   get(index) {
      return this.data[index];
   }
   push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
   }
   pop() {
      delete this.data[this.length - 1];
      this.length--;
      return this.data;
   }
   delete(index) {
      const lastItem = this.data[this.length - 1];
      this.shiftItems(index);
      return this.data;
   }
   shiftItems(index) {
      for(let i = index; i < this.length; i++) {
         this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
   }
}

const newArr = new MyArray();
console.log(newArr.push('yo'));
console.log(newArr.push('mo'));
console.log(newArr.push('bro'));
console.log(newArr.length);
console.log(newArr.delete(0));
console.log(newArr.delete(0));