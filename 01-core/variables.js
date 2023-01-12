// three types of variables

// does not ignore code blocks
// global variable
// let's you re-declare
var a = 1;
// console.log("=> ~ file: variables.js:7 ~ a", a);
{
  var local = 2;
}
// console.log("=> ~ file: variables.js:10 ~ local", local);
var a = 2;

// preferred way to declare mutable variables
let b = 2;    // dart -> var

// immutable, it can be compile-time or run-time
const c = 3;  // dart -> const / final
const CAPITAL = 'Hello' // known before run-time // dart -> const
