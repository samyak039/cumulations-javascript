// init
let obj = {};
let object = new Object();

let samyak = { firstName: "Samyak", lastName: "Bardiya", birthYear: 1999 };
console.log("=> ~ samyak", samyak);

console.log("=> ~ samyak->birthYear", samyak.birthYear);

samyak.gender = "male";
console.log("=> ~ samyak", samyak);

delete samyak.birthYear;
console.log("=> ~ samyak", samyak);

// square bracket for multi-word key; cause dot operator don't work
samyak["is human"] = true;
console.log("=> ~ samyak", samyak);

console.log("firstName" in samyak);
console.log("birthYear" in samyak);
