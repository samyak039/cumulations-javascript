// array => list of objects
let arr = [];
let array = new Array();

// list of same types
let realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("=> ~ realNumbers", realNumbers);

let numberSpellings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
console.log("=> ~ numberSpellings", numberSpellings);

// list of multiple array
let randomMess = [
  false,
  true,
  "two",
  3.14,
  2 ** 2,
  5,
  { six: 6 },
  function () {
    return 7;
  },
];
console.log("=> ~ randomMess", randomMess);

// length
console.log(randomMess.length);

// at
// +ve => from start
// -ve => from last
console.log(randomMess.at(2));
console.log(randomMess.at(-2));

// pop & push -> operates at the end
realNumbers.push(10);
console.log("=> ~ realNumbers", realNumbers);
realNumbers.pop();
console.log("=> ~ realNumbers", realNumbers);

// shift, unshift -> operates at the front
realNumbers.unshift(0);
console.log("=> ~ realNumbers", realNumbers);
realNumbers.shift();
console.log("=> ~ realNumbers", realNumbers);
