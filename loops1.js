// loops / løkker
const names = [
  "Adam",
  "Berit",
  "Tim",
  "alfred",
  "Alf",
  "Malin",
  "Ivar",
  "Geir",
  "Anna",
  "Sofie",
  "Ola",
];

// 1.
// hei Adam
// hei Berit

// 2.

console.log("Hei " + names[0] + "!");

// 3.

/* console.log(`Hei ${names[0]}!`);
console.log(`Hei ${names[1]}!`);
console.log(`Hei ${names[2]}!`);
console.log(`Hei ${names[3]}!`); */

// 4.
//for loop
// begynner på første
// loop keywords break and continue
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Ivar") break;
  console.log(`Hei ${names[i]}!`);
}
/*
// begynner på siste
for (let i = names.length - 1; i >= 0; i--) {
  console.log(`Hei ${names[i]}!`);
}
//annen hver
for (let i = 0; i < names.length; i += 2) {
  console.log(`Hei ${names[i]}!`);
} */

//5.
// for offloop

/* for (let name of names) {
  console.log(`Hei ${name}!`);
} */

// 6
// while loop

/* const secretNumber = 79; */
/* const randomNumber = Math.ceil(Math.random() * 10); */
// math.random returne et tall mellom 0 å 1
// math. ciel runder opp, math.floor runder ned, math.round runder opp fra desimalet
/* console.log(randomNumber); */
/* 
let guess = 0;

while (guess !== randomNumber) {
  guess++;
  console.log("guessing " + guess);
}
console.log("The seceret number was " + guess); */
