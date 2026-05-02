document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText !== "") {
    const task = document.createElement("li");
    task.innerHTML = `<span>${taskText}</span>
        <div class='btn-group'>
        <button class='editTask'>Edit</button>
        <button class='doneTask'>Complete</button>
        <button class='deleteTask'>Delete</button>
        </div>`;
    taskList.appendChild(task);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});

document.getElementById("taskList").addEventListener("click", function (e) {
  const deleteBtn = e.target.closest(".deleteTask");
  if (deleteBtn) {
    deleteBtn.closest("li").remove();
    return;
  }

  const doneBtn = e.target.closest(".doneTask");
  if (doneBtn) {
    doneBtn.closest("li").classList.toggle("done");
    return;
  }

  const editBtn = e.target.closest(".editTask");
  if (editBtn) {
    const li = editBtn.closest("li");
    const span = li.querySelector("span");
    if (!span) return;
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.className = "edit-input";
    span.replaceWith(input);
    input.focus();
    editBtn.textContent = "Save";
    editBtn.classList.remove("editTask");
    editBtn.classList.add("saveTask");
    return;
  }

  const saveBtn = e.target.closest(".saveTask");
  if (saveBtn) {
    const li = saveBtn.closest("li");
    const input = li.querySelector("input.edit-input");
    if (!input) return;
    const newSpan = document.createElement("span");
    newSpan.textContent = input.value.trim() || "Tache vide";
    input.replaceWith(newSpan);
    saveBtn.textContent = "Edit";
    saveBtn.classList.remove("saveTask");
    saveBtn.classList.add("editTask");
    return;
  }
});

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("addTask").click();
  }
}); 
