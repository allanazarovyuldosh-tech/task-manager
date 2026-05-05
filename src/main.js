let tasks = [];

function renderTasks() {
  const table = document.getElementById("taskTable");
  table.innerHTML = "<tr><th>№</th><th>Задача</th><th>Статус</th><th>Действия</th></tr>";
  tasks.forEach((task, i) => {
    table.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${task.text}</td>
        <td>${task.done ? "✔" : "✖"}</td>
        <td>
          <button onclick="toggleTask(${i})">Выполнено</button>
          <button onclick="deleteTask(${i})">Удалить</button>
        </td>
      </tr>`;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push({text: input.value, done: false});
    input.value = "";
    renderTasks();
  }
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  renderTasks();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  renderTasks();
}  git add index.html style.css main.js
git commit -m "Добавил HTML, CSS и обновил JS для Task Manager"
git push
// Загружаем задачи из localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Сохраняем задачи
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Добавление задачи
function addTask(title) {
  const task = { id: Date.now(), title, status: "Не выполнено" };
  tasks.push(task);
  saveTasks();
}





