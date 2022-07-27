const form = document.querySelector('#formNewTask');
const hoy = Date.now();
const fechaHoy = new Date(hoy);
console.log(fechaHoy);
form.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.log("HOLA");
  const formData = ev.target;
  
  const data = {
    titulo: formData.titulo.value,
    responsable: formData.responsable.value,
    descripcion: formData.descripcion.value,
    estado: 'to-do',
    fecha: formData.fecha.value,
    created: fechaHoy
  };
  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      createTask(res.data);
      formData.reset();
    })
    .catch((err) => console.error(err));
});