import Todo, { todoLoader as MyLoader } from "./todo.js";

const todosArray = await MyLoader();
todosArray
    .map(t=>(new Todo(t)).render())
    .join("");

const ts = document.getElementById("todoSection");
ts.insertAdjacentHTML("beforeend", todoHTML);
