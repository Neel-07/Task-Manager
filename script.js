document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task");
    const startTimeInput = document.getElementById("start-time"); // Start time input
    const endTimeInput = document.getElementById("end-time"); // End time input

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const startTime = startTimeInput.value; // Start time value
        const endTime = endTimeInput.value; // End time value
        if (taskText !== "" && startTime !== "" && endTime !== "") {
            addTask(taskText, startTime, endTime);
            taskInput.value = "";
            startTimeInput.value = "";
            endTimeInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task")) {
            deleteTask(event.target.parentNode);
        }
    });

    function addTask(taskText, startTime, endTime) {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="radio" class="task-done"> <!-- Radio button for task completion -->
            <span>${taskText}</span>
            <span class="task-time">${startTime} - ${endTime}</span> <!-- Task time frame -->
            <span class="delete-task">Delete</span>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
