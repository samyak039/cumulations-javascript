function myFunc(msg, e) {
  console.log("=> e:", e);
  container.textContent = `${msg} ${e}`;
}

let button = document.getElementById("form-button");

let form = document.getElementById("form");

const container = document.querySelector("#container");

// form events
form.addEventListener("change", (e) => myFunc("Change", e));
form.addEventListener("reset", (e) => myFunc("Reset", e));
form.addEventListener("submit", (e) => myFunc("Submit", e));

// mouse events
window.addEventListener("click", (e) => myFunc("click", e));
window.addEventListener("contextmenu", (e) => myFunc("contextmenu", e));
window.addEventListener("dblclick", (e) => myFunc("dblclick", e));
