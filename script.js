// functions in javascript

//block of code to do a spesific task. write onnce can reuse it need to call it

// functions declorations (statements) and hoisting

function sayHello() {
  console.log("hello");
}
sayHello();

// arrow functions (introdused in ES6, great for short inline functions)

const arrowFunction = () => {
  console.log("hello from the arrow function");
};

arrowFunction();

// return statements and scope

function one() {
  console.log("this function logs a message without returning a value");
}

one();

function two() {
  const myMesage = "this message is returned from the function";
  return myMesage; // last thing in function (return)
}

console.log(two());

const myArray = [1, 2, 3];

function changeArray() {
  myArray[2] = 100;
}

changeArray();

console.log(myArray);

// function with parammeters

//example 1 - hard coded function, only return 3+4
function add() {
  return 3 + 4;
}

console.log(add());

//example 2 -softcoded function, reusable, dynamic
function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(3, 4));
console.log(subtract(10, 5));

// example 3 - a greater function that uses parameters and temple literals

/* const greeter = (time, name) => {
  return "good" + "" + time + "" + name;
}; */
const greeter = (time, name) => {
  return `good ${time}  ${name}`;
};

const userData = {
  userName: "Joe",
  address: "123 whatever",
  tel: 49348349,
};

/* console.log(userData.userName);
console.log(greeter("morning", userData.userName")); */

/* console.log(greeter("Morning", "Joe"));
console.log(greeter("Evening", "Ole"));
console.log(greeter("Afternoon", "Bill")); */

// implisit return in arrow functions

/* const adder = (num1, num2) => {
  return num1 + num2;
}; */
const adder = (num1, num2) => num1 + num2;

console.log(adder(10, 5));

// calculater function using switch

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      return "invalid operator";
  }
}

console.log(calculator(10, 2, "*"));
console.log(calculator(10, 2, "+"));
console.log(calculator(10, 2, "-"));
console.log(calculator(10, 2, "/"));
console.log(calculator(10, 2, "%"));

//uppdating a global variable via function

let hp = 100;

const uppdateHp = (amount, direction) => {
  if (direction === "down") {
    hp -= amount;
  } else if (direction === "up") {
    hp += amount;
  }
};

uppdateHp(50, "down");
console.log(hp);

uppdateHp(25, "up");
console.log(hp);

const newArray = [];

function updateArray(data) {
  newArray.push(data);
}

updateArray(1);
updateArray(6);
updateArray(3);
updateArray(9);
console.log(newArray);

// using templete litterals and tenary opperator

const fruits = ["Bannana", "Apple", "Pear", "Kiwi"];

const drinks = ["coke", "water", "milk", "orange juice"];

const checkItem = (item, array) => {
  return `the array ${
    array.includes(item) ? "does" : "dosent"
  } include ${item}`;
};

console.log(checkItem("Apple", fruits));

console.log(fruits.includes("sprite", drinks));
