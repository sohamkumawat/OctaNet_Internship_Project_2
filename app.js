document
  .getElementById("add-task-button")
  .addEventListener("click", function () {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

function addTask(taskText) {
  const taskList = document.getElementById("task-list");

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "✔";
  completeButton.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "✖";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
}
