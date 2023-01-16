// init
let now = new Date();
console.log("=> ~ now", now);

let epoch = new Date(0);
console.log("=> ~ epoch", epoch);

let samyakDob = new Date("1999-11-30");
console.log("=> ~ samyakDob", samyakDob);

samyakDob = new Date(1999, 10, 30);
console.log("=> ~ samyakDob", samyakDob);

// get
console.log(now.getTime());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());

// set
now.setDate(30);
console.log("=> ~ now", now);

now.setMonth(10);
console.log("=> ~ now", now);

now.setFullYear(1999);
console.log("=> ~ now", now);
