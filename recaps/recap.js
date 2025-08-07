// make a function  that takes in 2 numbers as parameters (x and y)
//the functrion should return an array of lenght y numbers between 1 and x

const numberGenerator = (maxNum, amount) => {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    const randomNum = Math.ceil(Math.random() * maxNum);
    numbers.push(randomNum);
  }
  return numbers;
};

const myNums = numberGenerator(1000, 20);
console.log(myNums);

//lets make a function that takes in a number array as parameter and returns the highest number

function findMax(arr) {
  let highest = 0;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
}
console.log(findMax(myNums));

//
