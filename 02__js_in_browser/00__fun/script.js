const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const para1 = document.createElement("p");
para1.style.color = "red";
para1.textContent = "Hey, I'm Red.";
container.appendChild(para1);

// an <h3> with blue text that says “I’m a blue h3!”
const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";
container.appendChild(heading3);

// a <div> with a black border and pink background color with the following
// elements inside of it:
const blackPink = document.createElement("div");
blackPink.style.backgroundColor = "pink";
blackPink.style.border = "3px solid black";

// 1) another <h1> that says “I’m in a div”
const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
blackPink.appendChild(heading1);

// 2) a <p> that says “ME TOO!”
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
blackPink.appendChild(para2);

// 3) Hint for this one: after creating the <div> with createElement, append the
//    <h1> and <p> to it before adding it to the container.
container.appendChild(blackPink);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = 'blue';
});
