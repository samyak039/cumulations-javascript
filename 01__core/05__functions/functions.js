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

let samyakUser = User('Samyak', 'Bardiya', Date('1999-11-30'));
console.log("=> ~ samyakUser", samyakUser);
