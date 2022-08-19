const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function paintToDo(newToDo) {
    const newToDoli = document.createElement("li");
    newToDoli.id = newToDo.id;
    const newToDospan = document.createElement("span");
    newToDospan.innerText = newToDo.todo;

    const newButton = document.createElement("button");
    newButton.innerText = "X";
    newButton.addEventListener("click", deleteToDo);

    newToDoli.appendChild(newToDospan);
    newToDoli.appendChild(newButton);
    toDoList.appendChild(newToDoli);

}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const parentli = event.target.parentElement;
    parentli.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(parentli.id));
    saveToDo(toDos);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const objNewTodo = {
        todo: newToDo,
        id: Date.now()
    };
    toDos.push(objNewTodo);
    saveToDo();
    paintToDo(objNewTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}