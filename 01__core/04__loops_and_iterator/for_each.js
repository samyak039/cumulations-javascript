let number = new Array();
for (let i = 1; i <= 10; i++) {
  number.push(i);
}
console.log("=> ~ number", number);

n = 10;
number.forEach(function (item, index, array) {
  console.log(n + " x " + item + " = " + n * item);
});
