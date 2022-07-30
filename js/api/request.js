const API_URL = "https://my-json-server.typicode.com/wendy1496/M3U2TrelloAppWendyRendon"

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  let newTask = document.createElement("article");
  newTask.classList.add("contenedor1");
  newTask.setAttribute("id", "contenedor1");

  let taskTitulo = document.createElement("h4");
  taskTitulo.innerText = task.titulo;

  let taskResponsable = document.createElement("p");
  taskResponsable.innerHTML = `<h5>Responsable:</h5> ${task.responsable}`;

  let taskDetails = document.createElement("p");
  taskDetails.innerHTML = `<h5>Descripción:</h5> ${task.descripcion} `;

  let taskDate = document.createElement("p");
  taskDate.innerHTML = `<h5>Plazo:</h5> ${task.fecha}`;

  let taskCreate = document.createElement("p");
  taskCreate.innerHTML = `<h5>Creación:</h5><p> ${task.created}</p>`;

  let btn = document.createElement("div");
  btn.classList.add("row");
  btn.classList.add("text-center");
  btn.innerHTML = `<div class="col-12">
  <button class="btn btn-secondary" id="btnEliminar"><i class="fas fa-trash"></i></button>
  </div> `;

  newTask.appendChild(taskTitulo);
  newTask.appendChild(taskResponsable);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);
  newTask.appendChild(btn);

  let columnToDo = document.querySelector("#todoTasks");
  let columnDoing = document.querySelector("#doingTasks");
  let columnDone = document.querySelector("#doneTasks");

  if (task.estado === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if (task.estado === "doing") {
    columnDoing.appendChild(newTask);
  }
  if (task.estado === "done") {
    columnDone.appendChild(newTask);
  }
};