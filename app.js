const input = document.querySelector('.toDo-input');
const button = document.querySelector('.toDo-btn');
const list = document.querySelector('.toDo-list');


button.addEventListener('click', addField);


function addField(event) {
    event.preventDefault();
    // add Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('toDo');

    //add LI
    const newToDo = document.createElement('li')
    newToDo.innerText = 'hay hay';
    newToDo.classList.add('toDo-item');
    todoDiv.appendChild(newToDo);

    //CHECK MARK BUTTON
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK DELETE BUTTON
    const deleteButton=document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add('complete-btn');
    todoDiv.appendChild(deleteButton);

    //APPEND TO LIST

    list.appendChild(todoDiv);
}