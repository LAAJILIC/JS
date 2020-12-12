/* Ternary operator*/
// const bill = 275;
const bill = 40;
//const bill = 430;
const tip = 50 <= bill <= 300 ? (bill * 0.15) : (bill * 0.2);
console.log(tip);
console.log(`The bill value was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

