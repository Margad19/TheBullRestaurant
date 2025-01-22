export default class Todo {
  constructor(todoObj) {
    this.id = todoObj.id;
    this.task = todoObj.todo;
    this.done = todoObj.completed;
  }

  render() {
    return `
      <article>
        <h4>${this.task}</h4>
        <input type="checkbox" ${this.done ? "checked" : ""}>
      </article>
    `;
  }
}

export async function todoLoader(){

  const result = await fetch("https://dummyjson.com/todos");
  const data = await result.json();
  return data.todos;

  //.then(result=> result.json())
  //.then(data=>data.todos)

}

class Validation {
  constructor(parameter){

  }
}

