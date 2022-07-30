//Se crean guardan los id de cada dato del formulario para crear la tarea
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const responsable = document.getElementById('responsable');
const fecha = document.getElementById('fecha');
let btncrear = document.getElementById('btncrear');
let btnEliminar = document.getElementById('btnEliminar');
let date = new Date();
//Se organiza la fecha con el formato dd/mm/aaaa
let fechaHoy = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();


//Se hace uso de la API Fake con el evento click para crear una tarea 
	btncrear.addEventListener('click', () => {  
  const data = {
    titulo: titulo.value,
    responsable: responsable.value,
    descripcion: descripcion.value,
    estado: 'to-do',
    fecha: fecha.value,
    created: fechaHoy
  };
  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      createTask(res.data);
      
    })
    .catch((err) => console.error(err));
    limpiar();
  });

  btnEliminar.addEventListener('click', () => {  
    console.log("hola");
    });


//Hacemos una función para limpiar los campos cuando se agregue una tarea
function limpiar(){
	titulo.value = "";
	descripcion.value = "";
	responsable.value = "";
	fecha.value = "";
} 
