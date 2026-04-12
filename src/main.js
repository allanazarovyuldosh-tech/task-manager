document.getElementById("app").innerHTML = `
  <p>Здесь будет список задач.</p>
`;
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;

    // кнопка удаления
    const delBtn = document.createElement("button");
    delBtn.textContent = "Удалить";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  }
});
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("taskList");

// Загружаем задачи из localStorage при старте
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    input.value = "";
  }
});

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Удалить";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

