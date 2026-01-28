function addTask() {

  // Step 1: Input value get karo
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value;

  // Step 2: Empty check karo
  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Step 3: New li element create karo
  let li = document.createElement("li");
  li.innerHTML = taskValue;

  // Step 4: Delete button create karo
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.classList.add("delete-btn");

  // Step 5: Delete button ka function
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Step 6: li ke andar delete button add karo
  li.appendChild(deleteBtn);

  // Step 7: ul me li add karo
  document.getElementById("taskList").appendChild(li);

  // Step 8: Input clear karo
  taskInput.value = "";
}
