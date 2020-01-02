// Amazon shopping
const user = {
   name: 'Kim',
   active: true,
   cart: [],
   purchases: []
};
//Implement a cart feature:
// 1. Add items to cart.
function addToUserCart(user, { name, price }) {
   const item = {
      name,
      price
   }
   user.cart.push(item);
}
addToUserCart(user, { name: 'socks', price: 10 });
console.log(user.cart);
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.