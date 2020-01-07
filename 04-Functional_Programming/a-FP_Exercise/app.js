// Amazon shopping
const user = {
   name: 'Kim',
   active: true,
   cart: [],
   purchases: []
};
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

const compose = (a, b) => (...args) => a(b(...args));

function purchasesItem(...fns) {
   return fns.reduce(compose);
}

purchasesItem(emptyCart, buyItem, applyTaxToItem, addItemToCart)(user, { name: 'laptop', price: 200 });

function addItemToCart(user, item) {
   const updateCart = [ ...user.cart, item ];
   return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItem(user) {
   const { cart } = user;
   const taxRate = 0.03;
   const updateCart = cart.map(({ name, price }) => ({ 
      name,
      price: (price * taxRate) + price
   }));
   return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
   return Object.assign({}, user, { purchases: user. cart });
}

function emptyCart(user) {
   return Object.assign({}, user, { cart: [] });
}

//Bonus:
// accept refunds.
// Track user history.