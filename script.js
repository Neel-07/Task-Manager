document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task")) {
            deleteTask(event.target.parentNode);
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-task">Delete</span>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
