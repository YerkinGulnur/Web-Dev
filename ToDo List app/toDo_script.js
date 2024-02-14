const todoButton = document.querySelector('.add-btn');
const todoInput = document.querySelector('.new-task');
const todoTasks = document.querySelector('.tasks');

todoButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    taskItems(taskText);

    todoInput.value = "";
})

function taskItems(taskText) {
    const newTask = document.createElement('span');
    newTask.innerHTML = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentNode.className = 'task-item done' ;
        }
    });

    const removeButton = document.createElement('img');
    removeButton.className = 'trash-img';
    removeButton.src = 'trash.png';
    removeButton.alt = 'Delete task';
    removeButton.addEventListener('click', function() {
        this.parentNode.remove();
    });

    const item = document.createElement('div');
    item.className = 'task-item';
    item.appendChild(checkbox);
    item.appendChild(newTask);
    item.appendChild(removeButton);
    todoTasks.appendChild(item);
}
