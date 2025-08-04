//dom manipulation

// 1 what is dom_

// domm (docoment object manipulation)

//section 2 target existing html elements in javascript

const button = document.getElementById("my-button"); // targets element with id=my-button
console.log(button);

const headding = document.querySelector("h1"); // target the first h1 on the page
console.log(headding);

const listItems = document.querySelectorAll(".list-item");
// targets all li elements
console.log(listItems);

// 3. changing text or html content

headding.textContent = "welcome to the dom manipulation lesson";

headding.innerHTML = "<span style='color:red'>DOM manipulation</span>";

//security warning
// be carefull when using innerhtml with content that comes from user or external source
// can create a security risk
//use textcontent

headding.style.fontSize = "66px";
headding.style.color = "blue";
headding.style.setProperty("color", "blue", "important");
headding.style.textTransform = "uppercase";

// 5. creating and adding elements

// create a new p element

const newParagraph = document.createElement("p");

// set text content

newParagraph.textContent = "This paragraph was created by javascript";

// add a class
newParagraph.classList.add("created-paragraph");

//style with js
newParagraph.style.color = "green";

// add the element to the end of the body

document.body.append(newParagraph);

//append vs appendChild
//appendChild only accept doom nodes (elements)
// append can accept doom nodes or text and also multiple things at once

// create image element and adding atributes

const newImage = document.createElement("img");

newImage.setAttribute("src", "image");
newImage.src = "image";
newImage.alt = "a red apple";
newImage.width = 400;
console.log(newImage);

document.body.append(newImage);

// setatribute vs classlist
// setatribute (class one two) set or replaces classes
// classlist.add (extra) add class without removing

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added at the top";
firstParagraph.style.color = "purple";
document.body.prepend(firstParagraph);

const midParagraph = document.createElement("p");
midParagraph.textContent("im in the middle");
midParagraph.style.color = "orange";

const target = document.querySelector("p:nth-of-type(2)");

document.body.insertBefore(midparagraph, target);

// append - add to the end
// prepend - add to the beginning
// insertBefore - inserts before
// dom is element text node and comment node
// most of the time your working with elements youre using element nodes

//

const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "i was created using JS";
list.append(newItem);

// 6. removing elements

const firstListItme = document.querySelector("li");

list.removeChild(firstListItme);

// 7. parent child elements

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// 8. class list elements

const box = document.querySelector(".box");
// added class
box.classList.add("active");
//remove class
box.classList.remove("hidden");

// toggle a class

box.classList.toggle("darkmode");
box.classList.toggle("lightmode");

// check if element has a spesific class
console.log(box.classList.contains("highlight"));

// 9 creating a list

const favoriteMovies = [
  "the Matrix",
  "shrek",
  "interstellar",
  "kill buljo",
  "donnie darko",
  "pulp fiction",
  "hitchhikers guide",
  "fear and lothing in vegas",
  "Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Hellbound, Flesh-Eating Subhumanoid Zombified Living Dead, Part 3",
];

const movieHeading = document.createElement("h2");
movieHeading.textContent = "my favorite movies";
movieHeading.classList.add("section-heading");
document.body.append(movieHeading);

//create the ul

const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

//loop throu the array and create

/* for (let i = 0; i < favoriteMovies.length; i++) {
  const listItems = document.createElement("li");
  listItems.classList.add("movie")
  listItems.textContent = favoriteMovies[i];
  movieList.append(listItems);
}
 */
for (movie of favoriteMovies) {
  const listItems = document.createElement("li");
  listItems.classList.add("movie");
  listItems.textContent = movie;
  movieList.append(listItems);
}
