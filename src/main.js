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
const delBtn = document.createElement("button");
delBtn.textContent = "Удалить";
delBtn.style.marginLeft = "10px";
delBtn.onclick = () => li.remove();
li.appendChild(delBtn);
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
li.onclick = () => {
  li.classList.toggle("done");
};



