let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editTask(index);
        };
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(index);
        };
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function editTask(index) {
    let newTaskText = prompt("Enter new task text:");
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}