let num = 15;

let foo_bar =
  num % 3 == 0 ? (num % 5 == 0 ? "foobar" : "foo") : num % 5 == 0 ? "bar" : num;

console.log("=> ~ foo_bar", foo_bar);
