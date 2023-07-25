function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
      return; // If the input is empty, do nothing
    }
  
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
  
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;
    
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear the input field after adding a task
  }
  
  function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
  }
  