// check if a list includes an item

const shoppingList = ["milk", "bread", "cheese"];
const gameList = ["mario kart", "gta5", "hello kitty island adventure"];

const checkItem = (item, itemArray) => {
  return `the array does  ${
    itemArray.includes(item) ? "" : "nt"
  } includes ${item}`;
};

console.log(checkItem("dog food", shoppingList));
console.log(checkItem("milk", shoppingList));
console.log(checkItem("mario kart", gameList));
console.log(checkItem("warframe", gameList));

// convert a sentence into kebab case (function, methods)

function toKebabCase(string) {
  /* return string.trim().replaceAll(" ", "-"); */
  return string.trim().split(" ").join("-");
}

console.log(toKebabCase("      hello javascript how are you      "));

// result: "hello-javascript-how-are-you"

//checking if a word is a paldrome(function, condictional, methods)

function isPalindrome(word) {
  const reversedWord = word.toLowerCase().split("").toReversed().join("");
  return `${word} is ${
    word.toLowerCase === reversedWord ? "" : "is not"
  } a palindrome`;

  const myWord = "smoothie";
}

//how can we return a fully lowercase word with an uppercase first letter

console.log(isPalindrome("rasecar")); // racecar is a palindrome
console.log(isPalindrome("bananna")); // bannana is not a palindrome

function upperCaseFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(upperCaseFirstLetter("smoothie")); //Smoothie
console.log(upperCaseFirstLetter("buIlDing")); //building

// intro to math.random

// built in javascript method gives random number between 0 (inclusive) and 1 (exclusive)

console.log(MathMLElement.random());

// 0-9

console.log(randomNumber);

// 1-10 add "+1"

const randomOneToTen = Math.floor(Math.floor() * 10) + 1;
console.log(randomOneToTen);

const pokemon = [
  "pikachu",
  "diglet",
  "electrode",
  "machop",
  "magicarp",
  "mew",
  "blastoise",
  "vaporon",
  "psyduck",
  "meowth",
];
console.log(`your starter pokemon is ${pokemon[randomNumber]}`);

const randomNumber = Math.floor(Math.random() * pokemon.length);

//remove the middle element of an array

const myArray = ["a", "b", "c", "d", "e"];

function removeMiddle(array) {
  const mid = Math.floor(array.lenght / 2);
  const copy = array.toSpliced(mid, 1);
  return copy;
}

console.log(removeMiddle(myArray));
console.log(removeMiddle(pokemon));

// rock paper siccors

function rockPaperScissors(userInput, aiInput) {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "its a draw";
    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "user wins";
    default:
      return "ai wins";
  }
}

console.log(rockPaperScissors("rock", "aiAnswer"));

const possibleAnswers = ["rock", "paper", "scissors"];

possibleAnswers[0];
possibleAnswers[1];
possibleAnswers[2];

console.log(possibleAnswers[0]);
/* console.log(possibleAnswers[1]);
console.log(possibleAnswers[2]); */

/* const randomNum = Math.floor(Math.floor() * 3); */
const randomNum = Math.floor(Math.floor() * possibleAnswers.length);

aiAswer = possibleAnswers[randomNum];

console.log(rockPaperScissors("rock", "aiAnswer"));
