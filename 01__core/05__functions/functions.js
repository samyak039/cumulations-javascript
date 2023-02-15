let samyak = {
  firstName: "Samyak",
  lastName: "Bardiya",
  dob: new Date("1999-11-30"),
};

function showMessage(user) {
  console.log("Hello, " + user.firstName + " " + user.lastName + ".");
}

showMessage(samyak);

function tableOf(n, till = 10) {
  for (let i = 1; i <= till; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}

tableOf(11);

tableOf(10, 5);

function legalAge(dob) {
  let now = new Date();
  let age = now.getFullYear() - dob.getFullYear();

  if (age >= 18) {
    console.log("You are over legal age");
  } else {
    console.log("You are under legal age");
  }
}

legalAge(samyak.dob);

// anonymous function
(() => {
  console.log("I am ANONYMOUS FUNCTION");
})();

function User(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;

  return {
    firstName: this.firstName,
    lastName: this.lastName,
    dob: this.dob,
  };
}

let samyakUser = User("Samyak", "Bardiya", Date("1999-11-30"));
console.log("=> ~ samyakUser", samyakUser);

function add7(number) {
  return number + 7;
}
console.log("add7: " + add7(3));

function multiply(a, b) {
  return a * b;
}
console.log("multiply: " + multiply(2, 5));

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log("capitalise: " + capitalize('lowercase'));
console.log("capitalise: " + capitalize('UPPERCASE'));
console.log("capitalise: " + capitalize('BoTh'));

function lastLetter(string) {
  return string.slice(-1);
}
console.log("lastLetter: " + lastLetter('abcd'));
