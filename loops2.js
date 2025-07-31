//objects
// string number array boolean object

const myArray = ["paul", "ivar", "anna"];

//object er en samling av key/value pairs

const user = {
  firstName: "Ola",
  lastName: "Hansen",
  age: 24,
  hobbies: ["TV", "Cycling", "Coding"],
  address: {
    streetname: "solskinngaten",
    streetnumber: 13,
    postcode: 4013,
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.age);

user.email = "Ola.hansen@gmail.com";

console.log(user.age);

user.age = 25;

console.log(user);

console.log(user.fullName());

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

/* for (let i = 0; i < people.length; i++) {
  console.log(people[i].hobbies);
} */

// for hver person i people arrayet lag en setning som:
// "otto is a 36 year old man/woman who likes chinema among other things"

/* function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.lenght);
}

for (let person of people) {
  console.log(
    `${person.name} is a ${person.age} year old ${
      person.male ? "man" : "woman"
    } who likes ${
      person.hobbies[getRandomIndex(person.hobbies)] */
/* person.hobbies[Math.floor(Math.random() * person.hobbies.length)] */
/*  } among other things`
  );
}

let combinedAge = 0;
for (let i = 0; i < people.lenght; i++) {
  combinedAge += people[i].age;
}
console.log(combinedAge); */

// isCool = true/false
// math.random = 0.7674381581 < 0.5 returnes false
// 0.452367 < 0.5 returnes true
for (let i = 0; i < people.length; i++) {
  people[i].isCool = Math.random() < 0.5;
}

console.log(people);

// lag en liste med alle hobbiene til personer som er 24 eller eldre

const oldPeopleHobbies = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age < 24) continue;
  for (let j = 0; j < people[i].hobbies.length; j++)
    oldPeopleHobbies.push(people[i].hobbies[j]);
}
console.log(oldPeopleHobbies);

// legg till 1 til alle sin age
const addOne = 1;
for (let i = 0; i < people.length; i++) {
  ++people[i].age;
}
console.log(people);
// lag et nytt array som bare inneholder kvinner
const women = [];

for (let person of people) {
  if (person.male === false) {
    women.push(person);
  }
}
console.log(women);
// finne ut hvilken person som har flest bokstaver i hobbiene sine

for (let i = 0; i < people.length; i++) {}

//

for (let person of people) {
  person.male = !person.male;
}
console.log(people);
