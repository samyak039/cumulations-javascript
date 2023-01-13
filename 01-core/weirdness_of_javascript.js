// STRING & NUMBERS
// ----------------

let weirdA = "" + 1 + 0;      // "10"
console.log("=> ~ weirdA", weirdA);
// The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and
// then we have "1" + 0, the same rule is applied.

let weirdB = "" - 1 + 0;      // -1
console.log("=> ~ weirdB", weirdB);
// The subtraction - (like most math operations) only works with numbers, it
// converts an empty string "" to 0.

let weirdC = true + false     // 1
console.log("=> ~ weirdC", weirdC);

let weirdD = 6 / "3"          // 2
console.log("=> ~ weirdD", weirdD);

let weirdE = "2" * "3"        // 6
console.log("=> ~ weirdE", weirdE);

let weirdF = 4 + 5 + "px"     // "9px"
console.log("=> ~ weirdF", weirdF);

let weirdG = "$" + 4 + 5      // "$45"
console.log("=> ~ weirdG", weirdG);

let weirdH = "4" - 2          // 2
console.log("=> ~ weirdH", weirdH);

let weirdI = "4px" - 2        // NaN
console.log("=> ~ weirdI", weirdI);

let weirdJ = "  -9  " + 5     // "  -9  5"
console.log("=> ~ weirdJ", weirdJ);
// The addition with a string appends the number 5 to the string.

let weirdK = "  -9  " - 5     // -14
console.log("=> ~ weirdK", weirdK);
// The subtraction always converts to numbers, so it makes " -9 " a number -9
// (ignoring spaces around it).

let weirdL = null + 1         // 1
console.log("=> ~ weirdL", weirdL);
// null becomes 0 after the numeric conversion.

let weirdM = undefined + 1    // NaN
console.log("=> ~ weirdM", weirdM);
// undefined becomes NaN after the numeric conversion.

let weirdN = " \t \n" - 2     // -2
console.log("=> ~ weirdN", weirdN);
// Space characters are trimmed off string start and end when a string is
// converted to a number. Here the whole string consists of space characters,
// such as \t, \n and a “regular” space between them. So, similarly to an empty
// string, it becomes 0.

// BOOLEAN
// -------

let zeroNum = 0;
let zeroStr = "0";

let usualA = Boolean(zeroNum);      // false
let usualB = Boolean(zeroStr);      // true
console.log("=> ~ usualA", usualA);
console.log("=> ~ usualB", usualB);

let weirdO = (zeroNum == zeroStr);  // true :)
// From JavaScript’s standpoint, this result is quite normal. An equality check
// converts values using the numeric conversion (hence "0" becomes 0), while the
// explicit Boolean conversion uses another set of rules.

// null vs 0
// ---------

let usualC = (null > 0);      // false
let usualD = (null == 0);     // false
console.log("=> ~ usualC", usualC);
console.log("=> ~ usualD", usualD);

let weirdP = (null >= 0);     // true :)
console.log("=> ~ weirdP", weirdP);

// The reason is that an equality check == and comparisons > < >= <= work
// differently. Comparisons convert null to a number, treating it as 0. That’s
// why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined
// such that, without any conversions, they equal each other and don’t equal
// anything else. That’s why (2) null == 0 is false.

// undefined vs 0
// --------------

let usualE = (undefined > 0);   // false
let usualF = (undefined < 0);   // false
let usualG = (undefined == 0);  // false

// Comparisons (1) and (2) return false because undefined gets converted to NaN
// and NaN is a special numeric value which returns false for all comparisons.

// The equality check (3) returns false because undefined only equals null,
// undefined, and no other value.
