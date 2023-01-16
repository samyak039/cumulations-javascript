// null => nothing, empty, a special object
const nothing = null;
console.log("=> ~ nothing", nothing);

// undefined => value not assigned
let notAssigned;
console.log("=> ~ notAssigned", notAssigned);

// NaN => computation error
const error = "string" / 1;
console.log("=> ~ error", error);
