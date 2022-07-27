// Apuntamos al formulario para crear la nueva tarea del HTML
const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formData = ev.target;
  
  // Recopilamos la información a enviar a la API
  const data = {
    titulo: formData.titulo.value,
    responsable: formData.responsable.value,
    descripcion: formData.descripcion.value,
    estado: 'to-do',
    fecha: formData.fecha.value,
    created: Date.now()
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      //Mandamos la información a la API
      createTask(res.data);
      //Reseteamos el formulario
      formData.reset();
    })
    .catch((err) => console.error(err));
});