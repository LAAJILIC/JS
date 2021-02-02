
// Importing module
/import './shoppingCard.js';
console.log('Importing module');
// //Named import
 import * as AllShopping from './shoppingCard.js';
 AllShopping.newAdd('pizza', 3);
 console.log(AllShopping.price);

// //Default import
 import add from './shoppingCard.js';
 add('pasta', 10);

///// Module Pattern
const ShoppingCard2 = (function () {
  const cart = [];
  const shipCost = 20;
  const price = 100;
  const totalQuantity = 50;
  const newAdd = function (prod, quantity) {
    cart.push({ prod, quantity });
    console.log(`${quantity} ${prod} to add`);
  };

  const currentStock = function (prod, quantity) {
    cart.push({ prod, quantity });
    console.log(`${quantity} ${prod} ordered from supplier`);
  };
  return { newAdd, cart, price, totalQuantity };
})();
ShoppingCard2.newAdd('appels', 5);
ShoppingCard2.newAdd('tomates', 7);
console.log(ShoppingCard2);
console.log(ShoppingCard2.shipCost);

