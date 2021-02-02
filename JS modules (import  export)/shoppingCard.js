//Exporting module
console.log('Exporting module');

const shipCost = 20;
const cart = [];

// Named export ( with values of variables)
export const newAdd = function (prod, quantity) {
  cart.push({ prod, quantity });
  console.log(`${quantity} ${prod} to add`);
};
const price = 100;
const totalQuantity = 50;

export { price, totalQuantity as tquantity };

//Default export ( with varibles NOT their values)

export default function (prod, quantity) {
  cart.push({ prod, quantity });
  console.log(`${quantity} ${prod} to add`);
}
