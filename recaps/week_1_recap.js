// recap
// variables data types and operators

// online store manage

const storeName = "tech haven"; // string
const productName = "wireless earbuds"; // string
let productPrice = 75; // Number (interger)
let productQuantity = 25; // interger
let isInStock = true; // booleon
let productTags = ["audio", "wireless", "accesory"]; // array
let discount; //undefined
discount = true;
// console
console.log(storeName);
console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(isInStock);
console.log(productTags);
console.log(discount);

console.log(productTags[2]);

// calculate

productQuantity++;

const totalBasket = productPrice * productQuantity;

console.log(totalBasket);

//compound assignment: increase product price

productPrice += 10;
console.log(productPrice);
/* productPrice = productPrice + 10 */

//increase quantity

productQuantity++;
productQuantity--;
console.log(productQuantity);

// using the module  operator
// find value when the total value is divided by 50

console.log(totalBasket / 50);

const reminder = totalBasket % 50;
console.log(reminder);

// condictional and logical

//deside promotion based on total things in basket

if (totalBasket > 350) {
  console.log("you qualify for free delivery");
} else if (totalBasket >= 300) {
  console.log("youre close to free delivery spend 350 or more to qualify");
} else {
  console.log("free delivery with orders 350 or more");
}
// condiction to say "youre close to free delivery"

// logical operators

// isInStock true
// discount true
// productQuantity is more than 20

if (isInStock && (discount === true || productQuantity > 20)) {
  console.log("congratulations your eligeble to a special offer");
}

//ternary opperator:

// if their total basket is over 350 they get free shipping othervise its a 15 fee
const shippingCost = totalBasket >= 350 ? "free shipping" : "15 delivery fee";
console.log(shippingCost);

// typeoff opperator

console.log(typeof storeName);
console.log(typeof productPrice);
console.log(typeof isInStock);
console.log(typeof productTags);

//temple litterals

/* const welcomeMessage =
  "Welcome to" +
  " " +
  storeName +
  " " +
  "we hope you enjoy your stay, our current offer is on" +
  " " +
  productName; */

const welcomeMessage = `Welcome to ${storeName},
 we hope you enjoy your stay, our current offer is on ${productName}`;
console.log(welcomeMessage);

