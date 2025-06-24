// conditions and related options

// type of operator

const myVariable = [1, 2, 3];
console.log(typeof myVariable);

// comparison operators

console.log(15 > 20); // greater
console.log(15 < 20); //less
console.log(15 >= 15); //greater or equal
console.log(20 <= 19); //less or equal
// == operator check if equal
console.log(10 == 10);
// === operator operatorchecks bouth value and type
console.log(10 === "10");

console.log(5 == 5.0);

console.log(15 != 15); // is it true that 15 equals 15? (not equal)

// condictional with if, if else, else

// basic "if statement"
let temperature = 1;
if (temperature >= 20) {
  console.log("its a hot day");
} else if (temperature >= 10) {
  console.log("its a mid day");
} else if (temperature > 0) {
  console.log("its freezing");
} else {
  console.log("its a cold day");
}

// logical operators and && or ||

//and (&&) requires bout conditions to be true

const age = 22;
const hasLicense = true;
const disqualified = false;

if (age >= 18 && hasLicense && disqualified !== true) {
  console.log("you can drive");
} else {
  console.log("you cant drive sorry");
}

// or (||) reqires at least one condition to be true

/* const day = saturday;
if (day === "saturday" || day === "sunday") {
  console.log("its the weekend");
} else {
  ("its the weekday");
} */

// ternary operator

//DRY - dont repeat yourself

const isMember = false;
const fee = isMember ? " $5" : " $10";

console.log("you pay", fee);

/* if(isMember === true) {
    console.log("you pay $5")
} else {
    console.log(you pay $10);
} */

// switch statement

/* const fruit = "Apple"
switch (fruit) {
    case:"Apple" :
    console.log(apples are delicius);
    break;
    case:"bannana":
    console.log("bannanas is great");
    break;
default:
    console.log("unknown fruit detected")
} */

// truthy or falsey

let test = {};

if ("hello world") {
  console.log("its true");
} else {
  console.log("its false");
}

//string with content is true
// string without content is false
// positive integer is true
// negative integar is true
// zero is false
// array with content is true
// empty array is true
// null is false
// empty object is true
// object is true

// template literal - template string

const firstname = "Ola";
const lastname = "Nordman";

const fullname = ``firstName lastName`` 

/* const fullname = firstname + "" + leastname; */

console.log(fullname);
