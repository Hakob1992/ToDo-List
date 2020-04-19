const input = document.querySelector('.toDo-input');
const button = document.querySelector('.toDo-btn');
const list = document.querySelector('.toDo-list');
const filterOption = document.querySelector('.filter-todo');


button.addEventListener('click', addField);
list.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addField(event) {
    event.preventDefault();
    // add Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('toDo');

    //add LI
    const newToDo = document.createElement('li')
    newToDo.innerText = input.value;
    newToDo.classList.add('toDo-item');
    todoDiv.appendChild(newToDo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //APPEND TO LIST

    list.appendChild(todoDiv);

    // clearTODO INPUT VALUE

    input.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    //DELETE
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');

        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    // CHECK MARK

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }

}


function filterTodo(e) {
    const todos = list.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";

                }
                break;
        }
    })
}