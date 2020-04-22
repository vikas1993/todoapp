
const url = "http://jsonplaceholder.typicode.com/todos";

export function getTodo() {
  return fetch(url)
  .then(response => response.json())
}

