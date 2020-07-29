$(document).ready(inicializarEventos);
function inicializarEventos(){
    traerDatos();
}

/* document.querySelector('#boton').addEventListener('click', traerDatos); */

function traerDatos() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let tabla = document.querySelector('#table');
            tabla.innerHTML = `<tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Website</th>
            <th>Compañia</th>
            </tr>`;

            for (let item of datos) {
                tabla.innerHTML += `
                <tr id="table">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.address.street} ${item.address.suite} ${item.address.city} ${item.address.zipcode} ${item.address.geo.lat} ${item.address.geo.lng}</td>
                <td>${item.phone}</td>
                <td>${item.website}</td>
                <td>${item.company.name} ${item.company.catchPhrase} ${item.company.bs}</td>
                </tr>`
            }
        }
    }
}

