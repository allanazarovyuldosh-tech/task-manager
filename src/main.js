let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask(title) {
  const task = { id: Date.now(), title, status: "Не выполнено" };
  tasks.push(task);
  saveTasks();
  renderTasks();
}
function editTask(id, newTitle) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.title = newTitle;
    saveTasks();
    renderTasks();
  }
}
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}
window.onload = () => {
  renderTasks();
};
function renderTasks() {
  const table = document.getElementById("taskTableBody");
  table.innerHTML = "";
  tasks.forEach(task => {
    const row = `<tr>
      <td>${task.title}</td>
      <td>${task.status}</td>
      <td>
        <button onclick="editTask(${task.id}, prompt('Новое название'))">Редактировать</button>
        <button onclick="deleteTask(${task.id})">Удалить</button>
      </td>
    </tr>`;
    table.innerHTML += row;
  });
}






