const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    input.value = "";
  }
});



