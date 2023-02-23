const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log("data:", data);
  return data;
};

console.log(1);
console.log(2);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log("resolved: ", response);
    return response.json();
  })
  .then((data) => {
    console.log("data: ", data);
  })
  .catch((err) => {
    console.error("rejected: ", err);
  });

console.log(3);
console.log(4);

getTodos();

console.log(4);
console.log(5);
