function fizzBuzz(numUpto) {
  for (let i = 0; i <= numUpto; i++) {
    let str = "";
    if (i % 3 == 0) str += "Fizz";
    if (i % 5 == 0) str += "Buzz";

    console.log(str || i);
  }
}

let numUpto = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

fizzBuzz(numUpto);
