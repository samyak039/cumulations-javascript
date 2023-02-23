import { Animal, Cat } from "./animals.js";
import { primeNumbers } from "./data.js";

// 02: Template Literals
//-----------------------

const hello = "Hello";
const world = "World";
const helloWorld = `${hello}, ${world}!`;
console.log("=> ~ helloWorld:", helloWorld);

const multiLine = `one
two
three`;
console.log("=> ~ multiLine:", multiLine);

// 03: Destructuring Objects
//---------------------------

const personalInformation = {
  firstName: "Samyak",
  lastName: "Bardiya",
  email: "samyak.b@cumulations.com",
  pinCode: "560027",
};

const { firstName, lastName, pinCode: zipCode } = personalInformation;
console.log("=> ~ firstName:", firstName);
console.log("=> ~ lastName:", lastName);
console.log("=> ~ zipCode:", zipCode);

// 04: Destructuring Arrays
//--------------------------

const [greetings, company] = ["Hello", "Cumulations"];
console.log("=> ~ greetings:", greetings);
console.log("=> ~ company:", company);

// 05: Object Literal
//--------------------

function addressMaker1(city, state) {
  // no need to assign them explicitly if they have same name
  const newAddress = { city, state };
  console.log("=> ~ addressMaker ~ newAddress:", newAddress);
}
addressMaker1("Bengaluru", "KA");

// 06: Object Literal (Challenge)
//--------------------------------
function addressMaker2(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "India",
  };

  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}
addressMaker2({ city: "Bengaluru", state: "Karnataka" });

// 07: for-of loop
//-----------------
const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let naturalSum = 0;

for (const num of naturalNumbers) naturalSum += num;
console.log("=> ~ realSum:", naturalSum);

let email = "samyak.b@cumulations.com";
for (const char of email) console.log(char);

// 08: for-of loop (challenge)
//-----------------------------
for (let num of naturalNumbers) {
  num = num + 10;
}
// doesn't change the REAL value
console.log("=> ~ realNumbers:", naturalNumbers);

// 09: spread operator
//---------------------
const wholeNumbers = [0, ...naturalNumbers];
console.log("=> ~ wholeNumbers:", wholeNumbers);

// 10: rest operator
//-------------------
function add(...nums) {
  let sum = 0;
  for (const num of nums) sum += num;
  console.log("=> ~ add ~ sum:", sum);
  return sum;
}
add(2, 3, 4, 30);

// 11: arrow functions
//---------------------
function multiply(...nums) {
  let ans = nums.reduce((x, y) => x * y);
  console.log("=> ~ multiply ~ ans:", ans);
  return ans;
}
multiply(1, 3, 13);

// 12: default params
//--------------------
function divide(a = 1, b = 1) {
  let ans = a / b;
  console.log("=> ~ divide ~ ans:", ans);
  return ans;
}
divide(39);

// 13: includes()
//----------------
console.log(naturalNumbers.includes(0));
console.log(wholeNumbers.includes(0));

// 14: let and const
//-------------------
if (false) {
  var variableVar = 5;
  let variableLet = 5;
}
console.log("=> ~ variableVar:", variableVar); // -> undefined
// console.log("=> ~ variableLet:", variableLet); // -> ERROR

const variableConst = [];
variableConst.push(0);
console.log("=> ~ variableConst:", variableConst);
// array = true; // -> ERROR, read-only

// 15: import and export
//-----------------------
const primeNum = primeNumbers;
primeNum.push(7);
console.log("=> ~ primeNum:", primeNum);
console.log("=> ~ primeNumbers:", primeNumbers);

// 16: padStart() & padEnd()
//---------------------------
let name = `${firstName} ${lastName}`;
console.log(name.padStart(23, "_").padEnd(33, "_"));

// 18: class
//-----------
let cat = new Cat("Cat", 4);
console.log("=> ~ cat:", cat);
cat.makeNoise();

// 19: HELPER METHODS
//--------------------

let normalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let squaredNumbers = normalNumbers.map((e) => e * e);
console.log("=> ~ squaredNumbers:", squaredNumbers);

let squaredNumbersString = "| ";
squaredNumbers.forEach((e, i) => {
  squaredNumbersString += `${i} => ${e} | `;
});
console.log("=> ~ squaredNumbersString:", squaredNumbersString);

let greaterThanTen = squaredNumbers.filter((e) => e > 10);
console.log("=> ~ greaterThanTen:", greaterThanTen);

let reduce = normalNumbers.reduce((prev, curr) => prev + curr);
console.log("=> ~ reduce:", reduce);

const hasNegativeNumber = [1, 2, 3, -1, 4].some((e) => e < 0);
console.log("=> ~ hasNegativeNumber:", hasNegativeNumber);

const allPositiveNumbers = [1, 2, 3, 1, 4].every((e) => e > 0);
console.log("=> ~ allPositiveNumbers:", allPositiveNumbers);

const numThree = [{ num: "one" }, { num: "two" }, { num: "three" }].find(
  (e) => e.num == "three"
);
console.log("=> ~ num3:", numThree);

const numTwo = [{ num: "one" }, { num: "two" }, { num: "three" }].findIndex((e) => e.num == "two");
console.log("=> ~ numI:", numTwo);
