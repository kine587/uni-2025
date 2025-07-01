// methodes (string, array, and numbers)
//a methods

//string methods

const text = "        Hello, javascript world         ";

const trimmedText = text.trim();
/* trimedText = Text.trim(); */

console.log(text.trim()); // removing white space from bouth ends

console.log(trimmedText.toUpperCase()); //converts to uppercase

console.log(trimmedText.toLowerCase()); // convert to lower case

console.log(trimmedText.indexOf("world")); // returnes the starting index of "javascript in the string"

/* console.log = trimmedText.slice(7, 17); */

/* console.log(slicedText); */
console.log(trimmedText);

console.log(trimmedText.replace("world", "universe")); // replacing first occurence
console.log(trimmedText.replaceAll("world", "universe"));

console.log(trimmedText.charCodeAt(0));

console.log(trimmedText.length); //returns the lenght of the string

console.log(trimmedText.split(" ")); // split the sring to an array ofsubstrings spaces

console.log(trimmedText.repeat(3));

// turning strings into numbers

const numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string into number

console.log(parseInt(numericString)); // pasets as an interger until an invalid character; returns 123

console.log(parseFloat(numericString));

// array methods

const colors = ["red", "green", "blue"];

console.log(colors.lenght); // returns the number of ellements in the array

colors.push("yellow"); // adds yellow
console.log(colors);

const lastColor = colors.pop(); //removes and returns last elements in array
console.log(colors);

console.log(colors.join(" ")); // goes from array to string

console.log(colors.includes("green")); //checks if "green" is in the array (true or false)

console.log(colors.shift()); // removes from the first array

colors.unshift("purple"); // adds purple at the beggining
console.log(colors);

const newColors = colors.toSpliced(1, 1, "orange");

console.log(colors); // logs the overal array
console.log(newColors);

const unsortedArray = [3, 1, 4, 1, 5, 9];
const sortedArray = unsortedArray.toSorted();

console.log(unsortedArray);
console.log(sortedArray);

const unsortedStringArray = ["c", "a", "b"];
const sortedStringArray = unsortedStringArray.toSorted().toReversed();
console.log(sortedStringArray);

console.log(sortedArray.at(0)); // first element
console.log(sortedArray.at(-1)); // last element

const reversedArray = sortedArray.toReversed();

console.log(reversedArray);

//number methods

const myNum = 5.907674;

console.log(myNum.toFixed(2));

console.log(myNum.toString());

console.log(myNum.toExponential());

// chaining methods together

// example 1 chaining string methods

const rawString = "      javascript is fun        ";
const processedString = rawString
  .trim()
  .replace("FUN", "awesome")
  .toLowerCase();

console.log(processedString);

//2 chain array and string

const words = ["hello", "world"];
const stringFormArray = words.join(" ").toUpperCase();
console.log(stringFormArray);

//3 chain

const chainedNum = myNum.toFixed(2).toString(2).split(" ").join(" ").repeat(2);
console.log(chainedNum);
