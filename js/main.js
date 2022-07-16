const crear1 = document.getElementById('crear1');
const contenedor1 = document.getElementById('contenedor1');
const tarea1 = document.getElementById('tarea1');
const texto1 = document.getElementById('texto1');
const responsable1 = document.getElementById('responsable1');
const fecha1 = document.getElementById("fecha1");
const crear2 = document.getElementById('crear2');
const contenedor2 = document.getElementById('contenedor2');
const tarea2 = document.getElementById('tarea2');
const texto2 = document.getElementById('texto2');
const responsable2 = document.getElementById('responsable2');
const fecha2 = document.getElementById("fecha2");
const crear3 = document.getElementById('crear3');
const contenedor3 = document.getElementById('contenedor3');
const tarea3 = document.getElementById('tarea3');
const texto3 = document.getElementById('texto3');
const responsable3 = document.getElementById('responsable3');
const fecha3 = document.getElementById("fecha3");

    
    crear1.addEventListener('click', () => {
		let stringTabla = `
        <div class="contenedor1">
		<h5>`;
        stringTabla += tarea1.value;
        stringTabla += `</h5><p>`;
        stringTabla += texto1.value;
        stringTabla += `</p><b>Responsable:</b><h6>`;
        stringTabla += responsable1.value;
        stringTabla += `</h6><b>Fecha:</b><h6>`;
        stringTabla += fecha1.value;
        stringTabla += `</h6></div>`;
            
			contenedor1.innerHTML = stringTabla;
           // $('#exampleModal1').modal('hide');
	
    });

    crear2.addEventListener('click', () => {
		let stringTabla = `
        <div class="contenedor1">
		<h5>`;
        stringTabla += tarea2.value;
        stringTabla += `</h5><p>`;
        stringTabla += texto2.value;
        stringTabla += `</p><b>Responsable:</b><h6>`;
        stringTabla += responsable2.value;
        stringTabla += `</h6><b>Fecha:</b><h6>`;
        stringTabla += fecha2.value;
        stringTabla += `</h6></div>`;
            
			contenedor2.innerHTML = stringTabla;
           // $('#exampleModal1').modal('hide');
	
    });

    crear3.addEventListener('click', () => {
		let stringTabla = `
        <div class="contenedor1">
		<h5>`;
        stringTabla += tarea3.value;
        stringTabla += `</h5><p>`;
        stringTabla += texto3.value;
        stringTabla += `</p><b>Responsable:</b><h6>`;
        stringTabla += responsable3.value;
        stringTabla += `</h6><b>Fecha:</b><h6>`;
        stringTabla += fecha3.value;
        stringTabla += `</h6></div>`;
            
			contenedor3.innerHTML = stringTabla;
           //$('#exampleModal1').modal('hide');
	
    });

